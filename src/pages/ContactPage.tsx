import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Phone, MessageSquare, MapPin, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<'message' | 'testdrive' | 'dealer'>('message');

  return (
    <div className="min-h-screen bg-night">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-8 lg:px-16 bg-gradient-to-b from-[#1A3A3A] to-[#0A0A0A]">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-4xl lg:text-6xl font-display font-light text-white mb-4">
            {t('contactPage.title')}
          </h1>
          <p className="text-sm text-mist/60 font-sans max-w-2xl leading-relaxed">
            {t('contactPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-8 lg:px-16 py-6 bg-[#131313] border-y border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('message')}
              className={`pb-3 text-xs font-bold tracking-widest uppercase transition-all border-b-2 ${activeTab === 'message'
                  ? 'text-white border-[#1C69D4]'
                  : 'text-mist/50 border-transparent hover:text-white'
                }`}
            >
              {t('contactPage.tabs.message')}
            </button>
            <button
              onClick={() => setActiveTab('testdrive')}
              className={`pb-3 text-xs font-bold tracking-widest uppercase transition-all border-b-2 ${activeTab === 'testdrive'
                  ? 'text-white border-[#1C69D4]'
                  : 'text-mist/50 border-transparent hover:text-white'
                }`}
            >
              {t('contactPage.tabs.testdrive')}
            </button>
            <button
              onClick={() => setActiveTab('dealer')}
              className={`pb-3 text-xs font-bold tracking-widest uppercase transition-all border-b-2 ${activeTab === 'dealer'
                  ? 'text-white border-[#1C69D4]'
                  : 'text-mist/50 border-transparent hover:text-white'
                }`}
            >
              {t('contactPage.tabs.dealer')}
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="px-8 lg:px-16 py-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Message Tab */}
          {activeTab === 'message' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2 bg-[#131313] rounded-precise p-8 lg:p-12 border border-white/5">
                <h2 className="text-2xl font-display font-light text-white mb-2">
                  {t('contactPage.message.title')}
                </h2>
                <p className="text-sm text-mist/60 mb-8">
                  {t('contactPage.message.subtitle')}
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                        {t('contactPage.form.fullName')}
                      </label>
                      <input
                        type="text"
                        placeholder={t('contactPage.form.fullNamePlaceholder')}
                        className="w-full bg-transparent border-b border-white/10 text-white py-2 focus:outline-none focus:border-[#1C69D4] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                        {t('contactPage.form.whatsapp')}
                      </label>
                      <input
                        type="tel"
                        placeholder="+62"
                        className="w-full bg-transparent border-b border-white/10 text-white py-2 focus:outline-none focus:border-[#1C69D4] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                      {t('contactPage.form.model')}
                    </label>
                    <select className="w-full bg-transparent border-b border-white/10 text-white py-2 focus:outline-none focus:border-[#1C69D4] transition-colors">
                      <option value="">{t('contactPage.form.selectModel')}</option>
                      <option value="3-series">BMW 3 Series</option>
                      <option value="5-series">BMW 5 Series</option>
                      <option value="x5">BMW X5</option>
                      <option value="x3">BMW X3</option>
                      <option value="ix">BMW iX</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-4">
                      {t('contactPage.form.inquiryType')}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button type="button" className="px-4 py-3 border border-white/10 text-xs font-bold tracking-widest uppercase text-mist/70 hover:border-[#1C69D4] hover:text-white transition-all">
                        {t('contactPage.inquiry.testDrive')}
                      </button>
                      <button type="button" className="px-4 py-3 border border-white/10 text-xs font-bold tracking-widest uppercase text-mist/70 hover:border-[#1C69D4] hover:text-white transition-all">
                        {t('contactPage.inquiry.specs')}
                      </button>
                      <button type="button" className="px-4 py-3 border border-white/10 text-xs font-bold tracking-widest uppercase text-mist/70 hover:border-[#1C69D4] hover:text-white transition-all">
                        {t('contactPage.inquiry.pricing')}
                      </button>
                      <button type="button" className="px-4 py-3 border border-white/10 text-xs font-bold tracking-widest uppercase text-mist/70 hover:border-[#1C69D4] hover:text-white transition-all">
                        {t('contactPage.inquiry.other')}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                      {t('contactPage.form.message')}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t('contactPage.form.messagePlaceholder')}
                      className="w-full bg-transparent border-b border-white/10 text-white py-2 focus:outline-none focus:border-[#1C69D4] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1C69D4] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1558B8] transition-all flex items-center justify-center gap-2"
                  >
                    {t('contactPage.form.send')} <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-[#1A1A1A] rounded-precise p-6 border border-white/5">
                  <div className="w-12 h-12 bg-[#1C69D4]/20 flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5 text-[#1C69D4]" />
                  </div>
                  <h3 className="text-lg font-display text-white mb-2">
                    {t('contactPage.contact.phone')}
                  </h3>
                  <p className="text-sm text-mist/60 mb-4">
                    {t('contactPage.contact.phoneDescription')}
                  </p>
                  <p className="font-mono text-white">0800 - 1234 - 567</p>
                </div>

                {/* WhatsApp */}
                <div className="bg-[#1A1A1A] rounded-precise p-6 border border-white/5">
                  <div className="w-12 h-12 bg-[#25D366]/20 flex items-center justify-center mb-4">
                    <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <h3 className="text-lg font-display text-white mb-2">
                    {t('contactPage.contact.whatsapp')}
                  </h3>
                  <p className="text-sm text-mist/60 mb-4">
                    {t('contactPage.contact.whatsappDescription')}
                  </p>
                  <button className="text-xs font-bold tracking-widest uppercase text-[#1C69D4] flex items-center gap-2 hover:gap-3 transition-all">
                    {t('contactPage.contact.startChat')} <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Operating Hours */}
                <div className="bg-[#1A1A1A] rounded-precise p-6 border border-white/5">
                  <span className="text-xs font-mono text-mist/50 uppercase tracking-widest block mb-4">
                    {t('contactPage.hours.customerService')}
                  </span>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-mist/60">{t('contactPage.hours.weekdays')}</span>
                      <span className="font-mono text-white">08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-mist/60">{t('contactPage.hours.weekend')}</span>
                      <span className="font-mono text-white">09:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-white/5">
                      <span className="text-mist/60">{t('contactPage.hours.email')}</span>
                      <span className="font-mono text-white text-xs">info@bmwstore.id</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Test Drive Tab */}
          {activeTab === 'testdrive' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Test Drive Form */}
              <div className="lg:col-span-2 bg-[#131313] rounded-precise p-8 lg:p-12 border border-white/5">
                <h2 className="text-2xl font-display font-light text-white mb-2">
                  {t('contactPage.testdrive.title')}
                </h2>
                <p className="text-sm text-mist/60 mb-8 leading-relaxed">
                  {t('contactPage.testdrive.description')}
                </p>

                <form className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                      {t('contactPage.form.fullName')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('contactPage.form.fullNamePlaceholder')}
                      className="w-full bg-transparent border-b border-white/10 text-white py-2 focus:outline-none focus:border-[#1C69D4] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                      {t('contactPage.form.whatsapp')}
                    </label>
                    <div className="flex gap-2">
                      <span className="px-4 py-2 bg-[#1A1A1A] border border-white/10 text-mist/60 text-sm">+62</span>
                      <input
                        type="tel"
                        placeholder="812 3456 7890"
                        className="flex-1 bg-transparent border-b border-white/10 text-white py-2 focus:outline-none focus:border-[#1C69D4] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                      {t('contactPage.testdrive.modelLabel')}
                    </label>
                    <select className="w-full bg-[#1A1A1A] border border-white/10 text-white py-3 px-4 focus:outline-none focus:border-[#1C69D4] transition-colors">
                      <option value="">BMW X5 xDrive40i</option>
                      <option value="3-series">BMW 3 Series</option>
                      <option value="x3">BMW X3</option>
                      <option value="ix">BMW iX</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                      {t('contactPage.testdrive.date')}
                    </label>
                    <input
                      type="date"
                      className="w-full bg-transparent border-b border-white/10 text-white py-2 focus:outline-none focus:border-[#1C69D4] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-3">
                      {t('contactPage.testdrive.time')}
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          className="py-2 border border-white/10 text-xs font-mono text-mist/70 hover:border-[#1C69D4] hover:text-white hover:bg-[#1C69D4] transition-all"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                      {t('contactPage.testdrive.location')}
                    </label>
                    <input
                      type="text"
                      placeholder={i18n.language === 'id' ? 'Jakarta Selatan' : 'South Jakarta'}
                      className="w-full bg-transparent border-b border-white/10 text-white py-2 focus:outline-none focus:border-[#1C69D4] transition-colors"
                    />
                    <p className="text-xs text-mist/40 mt-2 font-mono">
                      {t('contactPage.testdrive.locationNote')}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1C69D4] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#1558B8] transition-all flex items-center justify-center gap-2"
                  >
                    {t('contactPage.testdrive.confirm')} <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Process */}
                <div className="bg-[#131313] rounded-precise p-6 border border-white/5">
                  <span className="text-xs font-mono text-mist/50 uppercase tracking-widest block mb-6">
                    {t('contactPage.testdrive.process')}
                  </span>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1C69D4] flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <div>
                        <p className="text-sm text-white mb-1">
                          {t('contactPage.testdrive.step1.title')}
                        </p>
                        <p className="text-xs text-mist/50">
                          {t('contactPage.testdrive.step1.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-mist/60">2</span>
                      </div>
                      <div>
                        <p className="text-sm text-white mb-1">
                          {t('contactPage.testdrive.step2.title')}
                        </p>
                        <p className="text-xs text-mist/50">
                          {t('contactPage.testdrive.step2.description')}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-mist/60">3</span>
                      </div>
                      <div>
                        <p className="text-sm text-white mb-1">
                          {t('contactPage.testdrive.step3.title')}
                        </p>
                        <p className="text-xs text-mist/50">
                          {t('contactPage.testdrive.step3.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Available Units */}
                <div className="bg-[#131313] rounded-precise p-6 border border-white/5">
                  <span className="text-xs font-mono text-mist/50 uppercase tracking-widest block mb-4">
                    {t('contactPage.testdrive.available')}
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-white">BMW 3 Series</span>
                      <span className="text-xs font-mono text-[#25D366]">● {t('contactPage.testdrive.availableStatus')}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-white">BMW X5</span>
                      <span className="text-xs font-mono text-[#25D366]">● {t('contactPage.testdrive.availableStatus')}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-white">BMW iX</span>
                      <span className="text-xs font-mono text-[#25D366]">● {t('contactPage.testdrive.availableStatus')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dealer Tab */}
          {activeTab === 'dealer' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map & Dealer Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Map Placeholder */}
                <div className="bg-[#1A1A1A] rounded-precise h-64 lg:h-80 flex items-center justify-center border border-white/5 relative">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-[#1C69D4] mx-auto mb-2" />
                    <p className="text-sm text-mist/60 font-mono">BMW JAKARTA SELATAN</p>
                  </div>
                  <button className="absolute top-4 right-4 text-xs font-mono text-mist/50 flex items-center gap-2 hover:text-white transition-colors">
                    {t('contactPage.dealer.viewMap')} <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Dealer Details */}
                <div className="bg-[#131313] rounded-precise p-8 lg:p-12 border border-white/5">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-xs font-mono text-[#1C69D4] tracking-widest uppercase block mb-2">
                        {t('contactPage.dealer.flagship')}
                      </span>
                      <h3 className="text-2xl font-display font-light text-white">
                        {t('contactPage.dealer.name')}
                      </h3>
                    </div>
                    <div className="px-3 py-1.5 bg-[#25D366]/10 border border-[#25D366]/30">
                      <span className="text-[10px] font-mono text-[#25D366] uppercase tracking-wider">
                        ● {t('contactPage.dealer.open')}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <span className="text-xs font-mono text-mist/50 uppercase tracking-widest block mb-3">
                        {t('contactPage.dealer.address')}
                      </span>
                      <p className="text-sm text-mist/70 leading-relaxed">
                        {t('contactPage.dealer.addressValue')}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-mist/50 uppercase tracking-widest block mb-3">
                        {t('contactPage.dealer.contact')}
                      </span>
                      <p className="text-sm text-mist/70 font-mono">+62 21 7500 333</p>
                      <p className="text-sm text-mist/70 font-mono">contact@bmwstore.id</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                    <div>
                      <span className="text-xs font-mono text-mist/50 uppercase tracking-widest block mb-3">
                        {t('contactPage.dealer.hours')}
                      </span>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-mist/60">{t('contactPage.hours.weekdays')}</span>
                          <span className="font-mono text-white">08:00 - 20:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-mist/60">{t('contactPage.hours.saturday')}</span>
                          <span className="font-mono text-white">09:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-mist/60">{t('contactPage.hours.sunday')}</span>
                          <span className="font-mono text-white">10:00 - 16:00</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-mono text-mist/50 uppercase tracking-widest block mb-3">
                        {t('contactPage.dealer.support')}
                      </span>
                      <div className="bg-[#1A1A1A] border border-white/5 rounded-precise p-4">
                        <p className="text-white font-bold mb-1">
                          {t('contactPage.dealer.roadside')}
                        </p>
                        <p className="text-xs text-mist/50 mb-3">
                          {t('contactPage.dealer.roadsideDescription')}
                        </p>
                        <button className="text-xs font-mono text-[#1C69D4] hover:underline">
                          1500 269 →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Direct Inquiry */}
                <div className="bg-[#1A1A1A] rounded-precise p-6 border border-white/5">
                  <h3 className="text-lg font-display text-white mb-2">
                    {t('contactPage.dealer.inquiry.title')}
                  </h3>
                  <p className="text-sm text-mist/60 mb-6">
                    {t('contactPage.dealer.inquiry.description')}
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                        {t('contactPage.form.fullName')}
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#131313] border border-white/10 text-white py-2 px-3 text-sm focus:outline-none focus:border-[#1C69D4] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                        {t('contactPage.dealer.inquiry.phone')}
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-[#131313] border border-white/10 text-white py-2 px-3 text-sm focus:outline-none focus:border-[#1C69D4] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-mist/50 uppercase tracking-widest mb-2">
                        {t('contactPage.dealer.inquiry.model')}
                      </label>
                      <select className="w-full bg-[#131313] border border-white/10 text-white py-2 px-3 text-sm focus:outline-none focus:border-[#1C69D4] transition-colors">
                        <option value="">{t('contactPage.form.selectModel')}</option>
                        <option value="3-series">BMW 3 Series</option>
                        <option value="x5">BMW X5</option>
                        <option value="ix">BMW iX</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#1C69D4] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#1558B8] transition-all"
                    >
                      {t('contactPage.form.send')}
                    </button>
                  </form>
                </div>

                {/* Virtual Consultation */}
                <div className="bg-[#1A1A1A] rounded-precise p-6 border border-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white mb-1">
                        {t('contactPage.dealer.virtual.title')}
                      </h3>
                      <p className="text-xs text-mist/50">
                        {t('contactPage.dealer.virtual.description')}
                      </p>
                    </div>
                    <MessageSquare className="w-5 h-5 text-mist/40" />
                  </div>
                </div>

                {/* Find Other Dealers */}
                <div className="bg-[#1A1A1A] rounded-precise p-6 border border-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white mb-1">
                        {t('contactPage.dealer.findOther.title')}
                      </h3>
                      <p className="text-xs text-mist/50">
                        {t('contactPage.dealer.findOther.description')}
                      </p>
                    </div>
                    <MapPin className="w-5 h-5 text-mist/40" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
