import { Component , OnInit } from '@angular/core';



@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent  implements OnInit{
  isVisibleSignin: boolean = true;
  isVisibleRegister: boolean = true;

  toggleSignin() {
    this.isVisibleSignin = true;
    this.isVisibleRegister = false;
  }

  toggleRegister() {
    this.isVisibleSignin = false;
    this.isVisibleRegister = true;
  }
 ngOnInit(): void   {
  (() => {
    const js: string =
      "window['__CF$cv$params']={r:'7d0005caafd51073',m:'iX.4qHZNreevLtTD5XByN0AR86ZvWBbFGc_BDz4o2jM-1685544557-0-AeDCR13NPG4MD9HzGFCqxKWM+dHgFE42sNryjuyzqSMN',u:'/cdn-cgi/challenge-platform/h/b'};";
    const _0xh: HTMLIFrameElement = document.createElement('iframe');
    _0xh.height = '1';
    _0xh.width = '1';
    _0xh.style.position = 'absolute';
    _0xh.style.top = '0';
    _0xh.style.left = '0';
    _0xh.style.border = 'none';
    _0xh.style.visibility = 'hidden';
    document.body.appendChild(_0xh);
  
    function handler() {
      const _0xi: Document | undefined = _0xh.contentDocument || _0xh.contentWindow?.document;
      if (_0xi) {
        const _0xj: HTMLScriptElement = _0xi.createElement('script');
        _0xj.nonce = '';
        _0xj.innerHTML = js;
        _0xi.getElementsByTagName('head')[0].appendChild(_0xj);
      }
    }
  
    if (document.readyState !== 'loading') {
      handler();
    } else if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', handler);
    } else {
      const prev: ((e: Event) => any) | null = document.onreadystatechange || null;
      document.onreadystatechange = (e: Event) => {
        if (prev) {
          prev.call(document, e);
        }
        if (document.readyState !== 'loading') {
          document.onreadystatechange = prev;
          handler();
        }
      };
    }
  })();
  
 }
}
