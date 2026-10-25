import React, { useState } from 'react';
import { UPCOMING_HORIZON } from '../../../constants/brand';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';

export default function HorizonTeaser() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#f8fafd] via-white to-white text-on-surface relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="rounded-3xl bg-white p-8 sm:p-14 shadow-[0_20px_60px_rgba(28,25,36,0.06)] relative overflow-hidden border border-slate-100">
          {/* Ambient Glowing Peach & Gold Blobs */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/20 to-[#FF6B35]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FFA07A] text-white font-label-sm text-label-sm font-bold w-fit shadow-md shadow-orange-500/20">
                <Icon name="auto_awesome" size="14px" />
                <span className="tracking-wider uppercase">R&amp;D Pipeline</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary-container font-extrabold sm:text-4xl">
                The ADLER Horizon
              </h2>
              <p className="font-body-md text-body-md text-slate-600 leading-relaxed">
                Beyond sparkling fruit elixirs, our labs in Bengaluru are perfecting the next wave of physiological beverage engineering. Prepare for new botanical frontiers arriving across India.
              </p>

              {/* 3 Pipeline Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                {UPCOMING_HORIZON.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#fbfcfe] hover:bg-white shadow-xs hover:shadow-md transition-all flex flex-col border border-slate-100 hover:border-orange-200"
                  >
                    <span className={`font-headline-sm text-headline-sm font-extrabold ${item.color}`}>
                      {item.title}
                    </span>
                    <span className="font-label-sm text-label-sm text-slate-500 mt-1.5 leading-snug">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Signup Box */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#f9fafc] to-white border border-slate-200/80 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-[#FF6B35] text-white flex items-center justify-center mb-4 shadow-lg shadow-orange-500/25">
                <Icon name="mark_email_unread" size="30px" />
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary-container font-extrabold">
                Be First on the Drop
              </h4>
              <p className="font-body-sm text-body-sm text-slate-500 mt-1 max-w-xs leading-relaxed">
                Register for exclusive early tastings and invitation-only tasting kits.
              </p>

              <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row items-center gap-2.5 mt-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter work or personal email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white text-slate-800 font-body-sm text-body-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B35] border border-slate-200"
                />
                <Button variant="peach" size="md" type="submit" className="w-full sm:w-auto shrink-0">
                  Join
                </Button>
              </form>

              {subscribed && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 text-emerald-800 font-label-sm text-label-sm font-bold border border-emerald-200 animate-in fade-in">
                  Welcome to the Eagle Circle. We'll drop exclusive tasting invitations to your inbox.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
