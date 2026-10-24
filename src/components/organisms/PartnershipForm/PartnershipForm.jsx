import React, { useState } from 'react';
import { BUSINESS_SEGMENTS, VOLUME_OPTIONS } from '../../../constants/partners';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Input/Select';
import Textarea from '../../atoms/Input/Textarea';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    segment: '',
    volume: '',
    email: '',
    phone: '',
    territory: '',
    notes: '',
    requestPriceSheet: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        companyName: '',
        segment: '',
        volume: '',
        email: '',
        phone: '',
        territory: '',
        notes: '',
        requestPriceSheet: true
      });
    }, 600);
  };

  return (
    <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-2xl shadow-xl relative border border-secondary/15">
      <div className="mb-8">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          OFFICIAL APPLICATION
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary uppercase mt-1 font-extrabold">
          SUBMIT PARTNERSHIP DOSSIER
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
          Complete the commercial profile below to receive our confidential price list, margin matrices, and distribution catalog.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name & Corporate Title"
            id="fullName"
            name="fullName"
            placeholder="Vikramaditya Rao, Director of Procurement"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <Input
            label="Business / Company Name"
            id="companyName"
            name="companyName"
            placeholder="Rao Enterprises & Retail Pvt Ltd"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Primary Business Segment"
            id="segment"
            name="segment"
            placeholder="Select Commercial Structure"
            options={BUSINESS_SEGMENTS}
            value={formData.segment}
            onChange={handleChange}
            required
          />
          <Select
            label="Projected Monthly Volume"
            id="volume"
            name="volume"
            placeholder="Select Projected Cans"
            options={VOLUME_OPTIONS}
            value={formData.volume}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Corporate Email"
            id="email"
            name="email"
            type="email"
            placeholder="procurement@raoenterprises.in"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Direct Phone / WhatsApp"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98200 XXXXX"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <Input
          label="City, State & Territory of Coverage"
          id="territory"
          name="territory"
          placeholder="e.g. Mumbai Metropolitan Region, Pune, Goa"
          value={formData.territory}
          onChange={handleChange}
          required
        />

        <Textarea
          label="Specific Distribution Footprint or Operational Notes"
          id="notes"
          name="notes"
          placeholder="Tell us about your existing brand distribution portfolio, warehouse locations, cold storage capabilities, or retailer reach..."
          value={formData.notes}
          onChange={handleChange}
          rows={3}
        />

        <div className="p-4 rounded-lg bg-surface-container flex items-start gap-3 border border-secondary/10">
          <input
            id="requestPriceSheet"
            name="requestPriceSheet"
            type="checkbox"
            checked={formData.requestPriceSheet}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded text-primary-container focus:ring-0 cursor-pointer accent-primary-container"
          />
          <label
            htmlFor="requestPriceSheet"
            className="font-body-sm text-body-sm text-on-surface cursor-pointer select-none leading-relaxed"
          >
            I request the official ADLER wholesale price sheet, trade scheme breakdown, and sample shipment eligibility criteria.
          </label>
        </div>

        <Button
          type="submit"
          variant="gold"
          size="lg"
          icon="arrow_forward"
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Processing Application...' : 'SUBMIT PARTNERSHIP APPLICATION'}
        </Button>

        {submitted && (
          <div className="p-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed-variant text-center font-label-md text-label-md font-bold shadow-md animate-in fade-in flex items-center justify-center gap-2">
            <Icon name="check_circle" size="20px" />
            <span>
              Application received. Our Commercial Directorate will initiate contact within 4 business hours.
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
