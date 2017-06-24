function style () {
  const code = `
.navigation {
  position: fixed;
  left: 300px;
  right: 0;
  bottom: 0;
  z-index: 10;
  height: 24px;
  margin: 10px 30px;
}

.navigation__item {
  display: flex;
  position: absolute;
  cursor: pointer;
  align-items: center;
}

.navigation__item span {
  opacity: 0;
  transition: opacity .3s;
}

.navigation__item:hover span {
  opacity: 1;
}

.navigation__item::before,
.navigation__item::after {
  border: 1px solid #34495e;
  transform: rotate(45deg);
  height: 16px;
  width: 16px;
  display: block;
}

.navigation__item--left {
  left: 0;
}

.navigation__item--left::before {
  content: "";
  border-right: none;
  border-top: none;
}

.navigation__item--right {
  right: 0;
}

.navigation__item--right::after {
  content: "";
  border-left: none;
  border-bottom: none;
}

@media screen and (max-width: 768px) {
  .navigation {
    position: relative;
    left: 0;
    margin-bottom: 50px;
  }

  .markdown-section {
    padding-bottom: 0;
  }
}
`
  const style = Docsify.dom.create('style', code)
  Docsify.dom.appendTo(Docsify.dom.head, style)
}

function navTpl() {
  return '<nav class="navigation">' +
    '<a class="navigation__item navigation__item--left"><span>abc</span></a>' +
    '<a class="navigation__item navigation__item--right"><span>ddd</span></a>' +
  '</nav>'
}

class Navigation {
  render() {
    const dom = document.createElement('div')
    div.class = 'navigation'
    this.leftLink = ''
    dom.appendChild()
    return dom
  }
}

function install (hook) {
  hook.ready(() => {
    // init nav component
    style()
    Docsify.dom.find('main').innerHTML += navTpl()
  })

  hook.doneEach(() => {
    // Update navigation
  })
}

$docsify.plugins = [].concat(install, $docsify.plugins)
