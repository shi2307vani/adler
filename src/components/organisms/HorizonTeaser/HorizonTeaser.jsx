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
    <section className="w-full py-20 bg-surface-container text-on-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="rounded-3xl bg-surface-container-lowest p-8 sm:p-14 shadow-xl relative overflow-hidden border border-secondary/15">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-container/30 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-fixed font-label-sm text-label-sm font-bold w-fit shadow-xs">
                <Icon name="auto_awesome" size="14px" />
                <span>R&amp;D Pipeline</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary-container font-extrabold">
                The ADLER Horizon
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Beyond sparkling fruit elixirs, our labs in Bengaluru are perfecting the next wave of physiological beverage engineering. Prepare for new botanical frontiers arriving across India.
              </p>

              {/* 3 Pipeline Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                {UPCOMING_HORIZON.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-surface-container-low flex flex-col border border-secondary/10"
                  >
                    <span className={`font-headline-sm text-headline-sm font-bold ${item.color}`}>
                      {item.title}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 leading-snug">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Signup Box */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl bg-surface-container border border-secondary/10">
              <div className="w-16 h-16 rounded-full bg-primary-container text-secondary-container flex items-center justify-center mb-4 shadow-md">
                <Icon name="mark_email_unread" size="32px" />
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary-container font-bold">
                Be First on the Drop
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-xs leading-relaxed">
                Register for exclusive early tastings and invitation-only tasting kits.
              </p>

              <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row items-center gap-2 mt-5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate or personal email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-secondary/20"
                />
                <Button variant="primary" size="sm" type="submit" className="w-full sm:w-auto shrink-0">
                  Join
                </Button>
              </form>

              {subscribed && (
                <div className="mt-3 text-on-tertiary-container font-label-sm text-label-sm font-bold animate-in fade-in">
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
