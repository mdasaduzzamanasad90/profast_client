const Faq = () => {
  return (
    <section className="mb-32">
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {/* FAQ 1 */}
        <div
          data-aos="fade-up"
          tabIndex={0}
          className="collapse collapse-arrow border border-[#CAEB66] bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="collapse-title text-lg font-semibold text-gray-800">
            How do I create an account?
          </div>
          <div className="collapse-content text-gray-600 leading-relaxed">
            Click the <strong>“Sign Up”</strong> button in the top right corner
            and follow the simple registration process to get started.
          </div>
        </div>

        {/* FAQ 2 */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          tabIndex={0}
          className="collapse collapse-arrow border border-[#CAEB66] bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="collapse-title text-lg font-semibold text-gray-800">
            Is there a free trial available?
          </div>
          <div className="collapse-content text-gray-600 leading-relaxed">
            Yes! We offer a 7-day free trial for all new users so you can
            explore the features before subscribing.
          </div>
        </div>

        {/* FAQ 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          tabIndex={0}
          className="collapse collapse-arrow border border-[#CAEB66] bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="collapse-title text-lg font-semibold text-gray-800">
            Can I cancel my subscription anytime?
          </div>
          <div className="collapse-content text-gray-600 leading-relaxed">
            Absolutely. You can cancel your subscription anytime from your
            account settings — no hidden fees or contracts.
          </div>
        </div>

        {/* FAQ 4 */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          tabIndex={0}
          className="collapse collapse-arrow border border-[#CAEB66] bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="collapse-title text-lg font-semibold text-gray-800">
            How do I contact customer support?
          </div>
          <div className="collapse-content text-gray-600 leading-relaxed">
            You can reach our support team anytime via the{" "}
            <strong>Contact Us</strong> page or email us directly at{" "}
            <span className="text-yellow-500 font-medium">
              support@posturepro.com
            </span>
            .
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
