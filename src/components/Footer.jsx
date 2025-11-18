export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-slate-400 text-sm">© 2025 AegisSecure Inc. All rights reserved.</p>
        <div className="flex items-center gap-6 text-slate-400 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  )
}
