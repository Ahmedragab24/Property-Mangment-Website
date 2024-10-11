export default function SupportSection() {
  return (
    <section className="bg-gradient-to-r from-black to-purple-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Support Center</h2>
        <p className="text-lg mb-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sales Card */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="mb-4">
              <span className="text-3xl text-purple-300">📞</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sales</h3>
            <p>
              Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo
              corrupti consequatur.
            </p>
          </div>

          {/* Technical Support Card */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="mb-4">
              <span className="text-3xl text-purple-300">🛠️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
            <p>
              Quod possimus sit modi rerum exercitationem quaerat atque tenetur
              ullam.
            </p>
          </div>

          {/* Media Inquiries Card */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="mb-4">
              <span className="text-3xl text-purple-300">📖</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Media Inquiries</h3>
            <p>
              Ratione et porro eligendi est sed ratione rerum itaque. Placeat
              accusantium impedit eum odit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
