import { useState, useEffect, useCallback } from 'react';
import { X, ChevronRight, ChevronLeft, CheckCircle, Wind, Wrench, Snowflake, Zap, Car, Building, HelpCircle } from 'lucide-react';

const rajdhani = "'Rajdhani', sans-serif";

const SERVICES = [
  { id: 'installation', label: 'AC Installation', icon: Wind, desc: 'New unit setup for home or office' },
  { id: 'repair', label: 'AC Repair', icon: Wrench, desc: 'Fix faults, leaks, or cooling issues' },
  { id: 'servicing', label: 'AC Servicing', icon: Snowflake, desc: 'Routine cleaning & maintenance' },
  { id: 'electrical', label: 'Electrical Wiring', icon: Zap, desc: 'AC-related electrical work' },
  { id: 'car-ac', label: 'Car AC Service', icon: Car, desc: 'Car air conditioning repairs' },
  { id: 'commercial', label: 'Commercial HVAC', icon: Building, desc: 'Offices, retail & large spaces' },
  { id: 'other', label: 'Other / Not Sure', icon: HelpCircle, desc: 'Describe your issue in the next step' },
];

interface BookNowModalProps {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

function useMathCaptcha() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const refresh = useCallback(() => {
    setA(Math.floor(Math.random() * 9) + 1);
    setB(Math.floor(Math.random() * 9) + 1);
  }, []);
  useEffect(() => { refresh(); }, [refresh]);
  return { a, b, answer: a + b, refresh };
}

export function BookNowModal({ open, onClose, defaultService }: BookNowModalProps) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(defaultService ?? '');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [timing, setTiming] = useState('');
  const [notes, setNotes] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [sent, setSent] = useState(false);
  const captcha = useMathCaptcha();

  // Reset when opened
  useEffect(() => {
    if (open) {
      setStep(defaultService ? 2 : 1);
      setService(defaultService ?? '');
      setName(''); setPhone(''); setAddress(''); setTiming(''); setNotes('');
      setCaptchaInput(''); setCaptchaError(''); setSent(false);
      captcha.refresh();
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!open) return null;

  const selectedService = SERVICES.find(s => s.id === service);
  const totalSteps = 4;

  const handleSubmit = () => {
    if (parseInt(captchaInput, 10) !== captcha.answer) {
      setCaptchaError('Incorrect answer — please try again.');
      captcha.refresh();
      setCaptchaInput('');
      return;
    }
    setCaptchaError('');

    const msg = [
      '🔧 *New Service Booking — B.B. Airconditions*',
      '',
      `*Service:* ${selectedService?.label ?? service}`,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Address:* ${address}`,
      `*Preferred Time:* ${timing || 'Flexible'}`,
      notes ? `*Notes:* ${notes}` : '',
    ].filter(l => l !== undefined && !(l === '' && !notes)).join('\n');

    const url = `https://wa.me/918777793800?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const canNext1 = service !== '';
  const canNext2 = name.trim().length >= 2 && /^[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));
  const canNext3 = address.trim().length >= 5;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg bg-[#0d1e30] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: '92vh', border: '1px solid rgba(0,153,204,0.2)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0">
          <div>
            <h2 style={{ fontFamily: rajdhani, fontSize: '24px', fontWeight: 700 }} className="text-white">
              Book a Service
            </h2>
            {!sent && (
              <p className="text-white/40 text-xs mt-0.5">
                Step {Math.min(step, totalSteps)} of {totalSteps}
              </p>
            )}
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!sent && (
          <div className="px-6 flex-shrink-0">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0099cc] rounded-full transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">

          {/* SUCCESS */}
          {sent && (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-20 h-20 rounded-full bg-[#0099cc]/15 border border-[#0099cc]/30 flex items-center justify-center mb-5">
                <CheckCircle className="w-10 h-10 text-[#0099cc]" />
              </div>
              <h3 style={{ fontFamily: rajdhani, fontSize: '26px', fontWeight: 700 }} className="text-white mb-2">
                Request Sent!
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Your booking details have been sent to us on WhatsApp. We'll contact you shortly to confirm your appointment.
              </p>
              <button
                onClick={onClose}
                className="mt-7 bg-[#0099cc] hover:bg-[#007aa3] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          )}

          {/* STEP 1 — Service */}
          {!sent && step === 1 && (
            <div>
              <p className="text-white/55 text-sm mb-4">What service do you need?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SERVICES.map((svc) => {
                  const Icon = svc.icon;
                  const active = service === svc.id;
                  return (
                    <button
                      key={svc.id}
                      onClick={() => setService(svc.id)}
                      className={`flex items-start gap-3 p-3 rounded-lg border text-left transition-all duration-200 ${
                        active
                          ? 'border-[#0099cc] bg-[#0099cc]/10'
                          : 'border-white/10 hover:border-white/25 bg-white/[0.03]'
                      }`}
                    >
                      <div className={`mt-0.5 flex-shrink-0 ${active ? 'text-[#0099cc]' : 'text-white/40'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${active ? 'text-[#0099cc]' : 'text-white/80'}`}>
                          {svc.label}
                        </p>
                        <p className="text-white/35 text-xs mt-0.5">{svc.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2 — Details */}
          {!sent && step === 2 && (
            <div className="space-y-4">
              <p className="text-white/55 text-sm">Your contact details</p>
              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">
                  Full Name <span className="text-[#0099cc]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-white/[0.05] border border-white/10 focus:border-[#0099cc] rounded-lg px-4 py-3 text-white placeholder:text-white/20 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">
                  Mobile Number <span className="text-[#0099cc]">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value.replace(/[^\d\s]/g, ''))}
                  placeholder="10-digit Indian mobile number"
                  maxLength={11}
                  className="w-full bg-white/[0.05] border border-white/10 focus:border-[#0099cc] rounded-lg px-4 py-3 text-white placeholder:text-white/20 text-sm outline-none transition-colors"
                />
                {phone && !/^[6-9]\d{9}$/.test(phone.replace(/\s/g, '')) && (
                  <p className="text-red-400 text-xs mt-1">Enter a valid 10-digit Indian mobile number</p>
                )}
              </div>
            </div>
          )}

          {/* STEP 3 — Location & Timing */}
          {!sent && step === 3 && (
            <div className="space-y-4">
              <p className="text-white/55 text-sm">Location & preferred timing</p>
              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">
                  Address / Area <span className="text-[#0099cc]">*</span>
                </label>
                <textarea
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  rows={2}
                  placeholder="e.g. Flat 4B, Park Street, Kolkata"
                  className="w-full bg-white/[0.05] border border-white/10 focus:border-[#0099cc] rounded-lg px-4 py-3 text-white placeholder:text-white/20 text-sm outline-none transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">
                  Preferred Date & Time
                </label>
                <input
                  type="text"
                  value={timing}
                  onChange={e => setTiming(e.target.value)}
                  placeholder="e.g. Monday morning, or ASAP"
                  className="w-full bg-white/[0.05] border border-white/10 focus:border-[#0099cc] rounded-lg px-4 py-3 text-white placeholder:text-white/20 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">
                  Additional Notes <span className="text-white/20">(optional)</span>
                </label>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Any specific issue or detail we should know?"
                  className="w-full bg-white/[0.05] border border-white/10 focus:border-[#0099cc] rounded-lg px-4 py-3 text-white placeholder:text-white/20 text-sm outline-none transition-colors resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 4 — Summary + CAPTCHA */}
          {!sent && step === 4 && (
            <div className="space-y-5">
              {/* Summary card */}
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 space-y-2.5">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Booking Summary</p>
                {[
                  { label: 'Service', value: selectedService?.label ?? service },
                  { label: 'Name', value: name },
                  { label: 'Phone', value: phone },
                  { label: 'Address', value: address },
                  { label: 'Preferred Time', value: timing || 'Flexible' },
                  ...(notes ? [{ label: 'Notes', value: notes }] : []),
                ].map(row => (
                  <div key={row.label} className="flex gap-3">
                    <span className="text-white/35 text-xs w-28 flex-shrink-0 pt-0.5">{row.label}</span>
                    <span className="text-white/80 text-xs leading-relaxed">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* CAPTCHA */}
              <div className="bg-[#0099cc]/[0.06] border border-[#0099cc]/20 rounded-xl p-4">
                <p className="text-white/60 text-xs mb-3">
                  Quick verification — what is{' '}
                  <span className="text-[#0099cc] font-bold">{captcha.a} + {captcha.b}</span>?
                </p>
                <input
                  type="number"
                  value={captchaInput}
                  onChange={e => { setCaptchaInput(e.target.value); setCaptchaError(''); }}
                  placeholder="Your answer"
                  className="w-full bg-white/[0.05] border border-white/10 focus:border-[#0099cc] rounded-lg px-4 py-2.5 text-white placeholder:text-white/20 text-sm outline-none transition-colors"
                />
                {captchaError && (
                  <p className="text-red-400 text-xs mt-1.5">{captchaError}</p>
                )}
              </div>

              <p className="text-white/30 text-xs text-center">
                Tapping "Send via WhatsApp" will open WhatsApp with your booking details pre-filled.
              </p>
            </div>
          )}
        </div>

        {/* Footer nav */}
        {!sent && (
          <div className="px-6 pb-6 pt-3 flex-shrink-0 flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                onClick={() => setStep(s => s - 1)}
                className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={
                  (step === 1 && !canNext1) ||
                  (step === 2 && !canNext2) ||
                  (step === 3 && !canNext3)
                }
                className="flex items-center gap-1.5 bg-[#0099cc] hover:bg-[#007aa3] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!captchaInput}
                className="flex items-center gap-2 bg-[#25d366] hover:bg-[#1da851] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
