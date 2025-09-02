<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ZK Mobile Mechanic – Book Now</title>
  <!-- Tailwind (CDN ile, kurulum yok) -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-b from-gray-50 to-white text-gray-900">
  <!-- HEADER -->
  <header class="px-6 sm:px-10 py-4 border-b bg-white/70 backdrop-blur sticky top-0 z-10">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="h-10 w-10 rounded-xl bg-black text-white grid place-items-center font-bold">ZK</div>
        <div>
          <h1 class="text-xl font-extrabold">ZK Mobile Mechanic</h1>
          <p class="text-xs text-gray-500">On-site diagnostics • Brakes • Oil • Hybrid checks</p>
        </div>
      </div>
      <a href="#book" class="text-sm font-semibold underline">Book Now</a>
    </div>
  </header>

  <!-- HERO -->
  <main class="px-6 sm:px-10 py-10">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-4xl font-extrabold tracking-tight">We come to you — fast.</h2>
        <p class="mt-3 text-gray-700">
          Mobile mechanic service across King & Pierce County. ASE-style diagnostics, brakes, oil & filter, hybrid battery checks.
          Same-day slots may be available.
        </p>
        <ul class="mt-5 text-gray-800 space-y-2 list-disc list-inside">
          <li>Licensed & insured</li>
          <li>Upfront estimates, no surprises</li>
          <li>Card/contactless payments (Stripe-ready)</li>
        </ul>
      </div>
      <div class="bg-white rounded-2xl shadow border p-6">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Estimated visit price</h3>
          <span id="est" class="text-2xl font-extrabold">$89</span>
        </div>
        <p class="text-xs text-gray-500 mt-1">Final price depends on vehicle & parts. Diagnostic fee applies to repair if approved.</p>
      </div>
    </div>
  </main>

  <!-- BOOKING FORM -->
  <section id="book" class="px-6 sm:px-10 pb-16">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow border p-6">
      <h2 class="text-2xl font-bold">Book an Appointment</h2>
      <p class="text-gray-600 text-sm mt-1">Enter your address and preferred time. We’ll call to confirm.</p>

      <div id="err" class="hidden mt-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm border border-red-200"></div>
      <div id="ok"  class="hidden mt-4 p-3 rounded-lg bg-green-50 text-green-700 text-sm border border-green-200">
        Thank you! We received your request and will call you shortly.
      </div>

      <form id="f" class="grid md:grid-cols-2 gap-4 mt-6">
        <div class="md:col-span-1">
          <label class="block text-sm font-medium">Full Name *</label>
          <input name="name" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="John Doe" required>
        </div>

        <div>
          <label class="block text-sm font-medium">Phone *</label>
          <input name="phone" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="(206) 555-1234" required>
        </div>

        <div>
          <label class="block text-sm font-medium">Email *</label>
          <input name="email" type="email" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="you@email.com" required>
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-medium">Address *</label>
          <input name="address" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="1234 Main St, Kent, WA" required>
          <div class="grid grid-cols-2 gap-3 mt-3">
            <div>
              <label class="block text-sm font-medium">City</label>
              <input name="city" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Kent">
            </div>
            <div>
              <label class="block text-sm font-medium">ZIP</label>
              <input name="zip" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="98030">
            </div>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium">Vehicle</label>
          <input name="vehicle" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="2016 Toyota Prius">
        </div>

        <div>
          <label class="block text-sm font-medium">Plate</label>
          <input name="plate" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="ABC1234">
        </div>

        <div>
          <label class="block text-sm font-medium">Service Type</label>
          <select name="service" id="service" class="mt-1 w-full rounded-xl border px-3 py-2">
            <option>Diagnostics</option>
            <option>Battery / No-Start</option>
            <option>Brakes</option>
            <option>Oil & Filter</option>
            <option>Check Engine Light</option>
            <option>Other</option>
          </select>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium">Date *</label>
            <input name="date" type="date" class="mt-1 w-full rounded-xl border px-3 py-2" required>
          </div>
          <div>
            <label class="block text-sm font-medium">Time *</label>
            <input name="time" type="time" class="mt-1 w-full rounded-xl border px-3 py-2" required>
          </div>
        </div>

        <div class="md:col-span-2">
          <label class="block text-sm font-medium">Notes</label>
          <textarea name="notes" class="mt-1 w-full rounded-xl border px-3 py-2 min-h-[100px]" placeholder="Issue, parking notes, gate code…"></textarea>
        </div>

        <div class="md:col-span-2 flex items-center justify-between pt-2">
          <p class="text-xs text-gray-500">By submitting you agree to be contacted for confirmation and scheduling.</p>
          <button class="inline-flex items-center gap-2 rounded-xl bg-black text-white px-5 py-2.5 font-semibold shadow hover:opacity-90">
            Submit Booking
          </button>
        </div>
      </form>

      <details class="mt-8">
        <summary class="cursor-pointer font-semibold">How it works</summary>
        <ol class="mt-3 text-sm text-gray-700 list-decimal list-inside space-y-1">
          <li>Submit the form (securely stored).</li>
          <li>We call to confirm price/time.</li>
          <li>Technician arrives and completes the job.</li>
        </ol>
      </details>
    </div>
  </section>

  <footer class="px-6 sm:px-10 pb-12 text-center text-xs text-gray-500">
    © <span id="y"></span> ZK AutoTech Services LLC • Kent, WA • (206) 551-2789 • zamankazimi88@gmail.com
  </footer>

  <script>
    // dynamic year
    document.getElementById('y').textContent = new Date().getFullYear();

    // simple price estimator
    const prices = {
      "Diagnostics": 89,
      "Battery / No-Start": 129,
      "Brakes": 149,
      "Oil & Filter": 99,
      "Check Engine Light": 129,
      "Other": 0
    };
    const svc = document.getElementById('service');
    const est = document.getElementById('est');
    function updateEst(){ est.textContent = '$' + (prices[svc.value] ?? 0); }
    svc.addEventListener('change', updateEst);
    updateEst();

    // ----- FORM SUBMIT -----
    const form = document.getElementById('f');
    const ok = document.getElementById('ok');
    const err = document.getElementById('err');

    // TODO: BURAYI DEĞİŞTİR → Formspree endpointini buraya koy
    const FORM_ENDPOINT = "https://formspree.io/f/your-id"; // örn: https://formspree.io/f/abcdwxyz

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      err.classList.add('hidden'); ok.classList.add('hidden');

      // basic validation
      const data = Object.fromEntries(new FormData(form).entries());
      if(!data.name || !data.phone || !data.email || !data.address || !data.date || !data.time){
        err.textContent = "Please fill all required fields."; err.classList.remove('hidden'); return;
      }

      const payload = {
        ...data,
        estimatedPrice: prices[data.service] ?? 0,
        submittedAt: new Date().toISOString(),
        source: "booking-page"
      };

      try {
        // Demo modu: Formspree id koymadıysan sadece bekletip başarı gösterir
        if (!FORM_ENDPOINT || FORM_ENDPOINT.includes("your-id")) {
          await new Promise(r => setTimeout(r, 600));
          ok.classList.remove('hidden');
          form.reset(); updateEst();
          return;
        }
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("Request failed");
        ok.classList.remove('hidden');
        form.reset(); updateEst();
      } catch (e) {
        err.textContent = "Something went wrong. Please try again.";
        err.classList.remove('hidden');
      }
    });
  </script>
</body>
</html>
