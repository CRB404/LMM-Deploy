import Container from './container'
import lmmWord from '../assets/img/LMM-word.png'
import lmm from '../assets/img/LMM.png'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 footer-color">
      <Container>
        <div className="pt-20 pb-8 flex flex-col items-center">
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <img className="my-6" src={lmmWord} />
              <hr />
              <p className="my-6 footer">Last Mile Money is a program of <a className="footer-link" href="https://www.ideo.com/">IDEO</a> CoLab in partnership with the <a className="footer-link" href="https://www.gatesfoundation.org/">Bill & Melinda Gates Foundation</a>. We work closely with <a className="footer-link" href="https://www.ideo.org">IDEO.org</a>, including its <a className="footer-link" href="https://www.womenandmoney.design/">Women + Money</a> program.</p>
            </div>
            <div className="col-span-2">
              <img className="m-2" src={lmm} />
            </div>
          </div>
          <hr className="w-full mt-2"/>
          <div className="flex flex-auto w-full">
            <p className="legal px-2 py-2 m-2 pl-0 ml-0 flex-grow text-left">©2020 IDEO</p>
            <p className="legal px-2 py-2 m-2 flex-grow text-center"><a href="https://www.ideo.com/privacy">PRIVACY & COOKIES POLICY</a></p>
            <p className="legal px-2 py-2 m-2 flex-grow text-center"><a href="https://docs.google.com/forms/d/e/1FAIpQLSd-VDt-8kvGYbCfKO-0jfDpzdak8u8kyCTv3Ke_XJikH5tDcQ/viewform">Do Not Sell My Personal Information</a></p>
            <p className="legal px-2 py-2 m-2 pr-0 mr-0 flex-grow text-right"><a href="https://www.ideo.com/privacy#privacy-rights">CA User Rights</a></p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
