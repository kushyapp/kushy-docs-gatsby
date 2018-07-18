import React, { Component } from 'react'
import Link from 'gatsby-link'

class Header extends Component {

  toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    if (sidebar.classList) { 
        sidebar.classList.toggle("visible");
    } else {
        // For IE9
        var classes = sidebar.className.split(" ");
        var i = classes.indexOf("visible");

        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("visible");
            sidebar.className = classes.join(" "); 
    }
  }

  render() {    
    return(
      <header className="Header ui red inverted top fixed secondary menu">
        <Link to={'/'} className="logo">
          <svg width="111px" height="32px" viewBox="0 0 111 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <polygon id="path-1" points="0 32 32 32 32 0 0 0"></polygon>
            </defs>
            <g id="Style-Guide" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Kushy-API-Logo---White-Text">
                  <path d="M57.908,19.408 L54.632,11.05 L51.314,19.408 L57.908,19.408 Z M50.768,1.39 L58.622,1.39 L71.138,31 L62.402,31 L60.26,25.75 L48.92,25.75 L46.82,31 L38.252,31 L50.768,1.39 Z M86.006,16.216 C87.4620073,16.216 88.6029959,15.8730034 89.429,15.187 C90.2550041,14.5009966 90.668,13.5700059 90.668,12.394 L90.668,12.31 C90.668,11.0499937 90.2550041,10.0910033 89.429,9.433 C88.6029959,8.77499671 87.4480074,8.446 85.964,8.446 L82.142,8.446 L82.142,16.216 L86.006,16.216 Z M73.994,1.6 L86.594,1.6 C88.4420092,1.6 90.1219924,1.83099769 91.634,2.293 C93.1460076,2.75500231 94.4339947,3.42699559 95.498,4.309 C96.5620053,5.19100441 97.3809971,6.27599356 97.955,7.564 C98.5290029,8.85200644 98.816,10.3079919 98.816,11.932 L98.816,12.016 C98.816,13.7520087 98.5010032,15.2779934 97.871,16.594 C97.2409968,17.9100066 96.3660056,19.0159955 95.246,19.912 C94.1259944,20.8080045 92.7890078,21.4799978 91.235,21.928 C89.6809922,22.3760022 87.9940091,22.6 86.174,22.6 L82.142,22.6 L82.142,31 L73.994,31 L73.994,1.6 Z M102.428,1.6 L110.618,1.6 L110.618,31 L102.428,31 L102.428,1.6 Z" id="API-Copy" fill="#F5F5F5"></path>
                  <g id="Group-4-Copy-13">
                      <circle id="Oval" fill="#CA2026" cx="16" cy="16" r="16"></circle>
                      <g id="k">
                          <mask id="mask-2" fill="white">
                              <use xlinkHref="#path-1"></use>
                          </mask>
                          <g id="Mask"></g>
                          <path d="M6.972,22.674 C6.86799948,22.3619984 6.89833251,21.8593368 7.063,21.166 C7.22766749,20.4726632 7.47899831,19.662338 7.817,18.735 C8.15500169,17.807662 8.54933108,16.806672 9,15.732 C9.45066892,14.657328 9.91433095,13.5740055 10.391,12.482 C10.867669,11.3899945 11.3269978,10.3283385 11.769,9.297 C12.2110022,8.26566151 12.596665,7.34267074 12.926,6.528 C13.255335,5.71332926 13.4979992,5.03733602 13.654,4.5 C13.8100008,3.96266398 13.8360005,3.64200052 13.732,3.538 C13.6106661,3.43399948 13.6669988,3.31266736 13.901,3.174 C14.1350012,3.03533264 14.4296649,2.95733342 14.785,2.94 C15.1403351,2.92266658 15.4999982,3.0006658 15.864,3.174 C16.2280018,3.3473342 16.4879992,3.6939974 16.644,4.214 C16.7480005,4.57800182 16.696001,5.14132952 16.488,5.904 C16.279999,6.66667048 15.9766687,7.54632835 15.578,8.543 C15.1793313,9.53967165 14.7156693,10.6099943 14.187,11.754 C13.6583307,12.8980057 13.125336,14.0333277 12.588,15.16 C12.9520018,14.8653319 13.3593311,14.5403351 13.81,14.185 C14.2606689,13.8296649 14.7156644,13.4613352 15.175,13.08 C15.6343356,12.6986648 16.0806645,12.3130019 16.514,11.923 C16.9473355,11.532998 17.3329983,11.173335 17.671,10.844 C18.0090017,10.514665 18.281999,10.215668 18.49,9.947 C18.698001,9.67833199 18.802,9.46600078 18.802,9.31 C18.802,9.15399922 18.9319987,9.11066632 19.192,9.18 C19.4520013,9.24933368 19.7119987,9.40966541 19.972,9.661 C20.2320013,9.91233459 20.4226661,10.232998 20.544,10.623 C20.6653339,11.0130019 20.5873347,11.4419977 20.31,11.91 C20.101999,12.2740018 19.7770022,12.6293316 19.335,12.976 C18.8929978,13.3226684 18.3946694,13.6519984 17.84,13.964 C17.2853306,14.2760016 16.7046697,14.5706653 16.098,14.848 C15.4913303,15.1253347 14.9106694,15.3766655 14.356,15.602 C14.6160013,16.0006687 14.9409981,16.5639964 15.331,17.292 C15.7210019,18.0200036 16.1586642,18.8216623 16.644,19.697 C17.1293358,20.5723377 17.6493306,21.4606622 18.204,22.362 C18.7586694,23.2633378 19.334997,24.0866629 19.933,24.832 C20.531003,25.5773371 21.128997,26.188331 21.727,26.665 C22.325003,27.1416691 22.9099971,27.3886666 23.482,27.406 C23.6380008,27.406 23.7030001,27.5229988 23.677,27.757 C23.6509999,27.9910012 23.534001,28.2466653 23.326,28.524 C23.117999,28.8013347 22.8233352,29.0569988 22.442,29.291 C22.0606648,29.5250012 21.601336,29.6333334 21.064,29.616 C20.2493293,29.5986666 19.5213365,29.2693365 18.88,28.628 C18.2386635,27.9866635 17.6623359,27.1850048 17.151,26.223 C16.6396641,25.2609952 16.1803354,24.2210056 15.773,23.103 C15.3656646,21.9849944 14.9930017,20.9320049 14.655,19.944 C14.3169983,18.9559951 14.0050014,18.1196701 13.719,17.435 C13.4329986,16.7503299 13.1426681,16.3560005 12.848,16.252 C12.6053321,16.3733339 12.3930009,16.4816662 12.211,16.577 C12.0289991,16.6723338 11.8773339,16.7633329 11.756,16.85 C11.3746648,17.6473373 11.0236683,18.4056631 10.703,19.125 C10.3823317,19.8443369 10.1136677,20.4899971 9.897,21.062 C9.68033225,21.6340029 9.52433381,22.1193313 9.429,22.518 C9.33366619,22.9166687 9.3293329,23.1939992 9.416,23.35 C9.48533368,23.4886674 9.42900091,23.6316659 9.247,23.779 C9.06499909,23.9263341 8.83100143,24.0043333 8.545,24.013 C8.25899857,24.0216667 7.96433485,23.9306676 7.661,23.74 C7.35766515,23.5493324 7.12800078,23.1940026 6.972,22.674 Z" fill="#FEFEFE" mask="url(#mask-2)"></path>
                      </g>
                  </g>
              </g>
            </g>
          </svg>
        </Link>

        <nav className="Navigation right menu">
          <a href="http://github.com/kushyapp" target="_blank" className="item ui button icon"><i className="icon github"></i></a>
          <a href="http://github.com/kushyapp" target="_blank" className="MenuHide item">Changelog</a>
          <a href="https://trello.com/b/wWfIWcTr" target="_blank" className="MenuHide item">Roadmap</a>
          <a href="http://kushy.net/developers/" className="item">Developers Portal</a>
          <a href="http://kushy.net/developers/getting-started" className="MenuHide item">Getting Started</a>
          <a href="http://kushy.net/register/" className="MenuHide item">Sign Up</a>
          <button className="SidebarToggle item ui button icon" onClick={(e) => this.toggleSidebar(e)}>
            <i className="bars icon"></i>
          </button>
        </nav>
      </header>
    )
  }
  
}

export default Header