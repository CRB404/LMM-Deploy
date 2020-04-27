import { CMS_NAME, CMS_URL } from '../lib/constants'
import landing from '../assets/img/Sample-landing.png'
import logo from '../assets/img/Logo.png'
import gates from '../assets/img/Gates.png'
import colab from '../assets/img/CoLab.png'

export default function Intro() {

  function emailClick() {
    console.log('this is:', this);
    window.location.href = 'mailto:' + 'lukasikdesign@gmail.com';
  }

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between">

      <div>
        <img src={logo} className="mb-32 mt-10"/>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-lead">
        We are a global collaborative network focused on connecting underserved communities to the digital economy.
        </h1>
        <button onClick={emailClick} class="pill-orange-dark hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full my-20">
          Get in touch
        </button>
        <p className="body mb-10">A program by</p>
        <div className="flex flex-wrap mb-8">
          <img src={colab} className="fade"/>
          <img src={gates} className="fade py-1 ml-8"/>
        </div>

      </div>

      <img src={landing} />
    </section>
  )
}
