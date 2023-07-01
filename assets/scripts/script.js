
const benefits = new Swiper('.swiper--benefits', {
	slidesPerView: '1',
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next--benefits',
		prevEl: '.swiper-button-prev--benefits',
	},
	pagination: {
		el: '.swiper-pagination--benefits',
		// type: 'bullets',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + `<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9143 0.924419C18.8857 2.39442 17.3714 1.61042 15.9286 2.03042C16.7571 2.07242 17.3857 1.98842 17.9429 2.17042C18.7857 2.43642 19.3571 3.05242 19.3 4.03242C19.2286 4.99842 18.4571 4.73242 17.8857 4.83042C12.5143 5.78242 7.14286 6.10442 1.7 5.46042C0.414286 5.30642 0 4.67642 0 3.61242C0.0142857 2.18442 1.18571 2.71642 1.87143 2.71642C5.11429 2.70242 8.37143 3.43042 11.5286 2.40842C8.1 2.08642 4.44286 2.99642 0.714286 1.83442C1.32857 0.658419 2.18571 0.994419 2.84286 1.00842C7.65714 1.07842 12.4429 0.798419 17.2 0.0424192C18.1857 -0.111581 19.0571 0.294419 19.9143 0.938419V0.924419ZM13.4571 2.40842C13.4571 2.40842 13.3571 2.36642 13.3143 2.36642C13.3 2.36642 13.2857 2.43642 13.2571 2.47842C13.3143 2.49242 13.3571 2.52042 13.4143 2.52042C13.4286 2.52042 13.4429 2.45042 13.4714 2.40842H13.4571Z" fill="#B0B0B0"/></svg>` + '</span>';
		}
	}
}) 

const color = new Swiper('.swiper--color', {
	slidesPerView: '1',
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next--color',
		prevEl: '.swiper-button-prev--color',
	},
	pagination: {
		el: '.swiper-pagination--color',
		// type: 'bullets',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + `<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9143 0.924419C18.8857 2.39442 17.3714 1.61042 15.9286 2.03042C16.7571 2.07242 17.3857 1.98842 17.9429 2.17042C18.7857 2.43642 19.3571 3.05242 19.3 4.03242C19.2286 4.99842 18.4571 4.73242 17.8857 4.83042C12.5143 5.78242 7.14286 6.10442 1.7 5.46042C0.414286 5.30642 0 4.67642 0 3.61242C0.0142857 2.18442 1.18571 2.71642 1.87143 2.71642C5.11429 2.70242 8.37143 3.43042 11.5286 2.40842C8.1 2.08642 4.44286 2.99642 0.714286 1.83442C1.32857 0.658419 2.18571 0.994419 2.84286 1.00842C7.65714 1.07842 12.4429 0.798419 17.2 0.0424192C18.1857 -0.111581 19.0571 0.294419 19.9143 0.938419V0.924419ZM13.4571 2.40842C13.4571 2.40842 13.3571 2.36642 13.3143 2.36642C13.3 2.36642 13.2857 2.43642 13.2571 2.47842C13.3143 2.49242 13.3571 2.52042 13.4143 2.52042C13.4286 2.52042 13.4429 2.45042 13.4714 2.40842H13.4571Z" fill="#B0B0B0"/></svg>` + '</span>';
		}
	}
}) 

const news = new Swiper('.swiper--news', {
	slidesPerView: 1,
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next--news',
		prevEl: '.swiper-button-prev--news',
	},
	pagination: {
		el: '.swiper-pagination--news',
		// type: 'bullets',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + `<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9143 0.924419C18.8857 2.39442 17.3714 1.61042 15.9286 2.03042C16.7571 2.07242 17.3857 1.98842 17.9429 2.17042C18.7857 2.43642 19.3571 3.05242 19.3 4.03242C19.2286 4.99842 18.4571 4.73242 17.8857 4.83042C12.5143 5.78242 7.14286 6.10442 1.7 5.46042C0.414286 5.30642 0 4.67642 0 3.61242C0.0142857 2.18442 1.18571 2.71642 1.87143 2.71642C5.11429 2.70242 8.37143 3.43042 11.5286 2.40842C8.1 2.08642 4.44286 2.99642 0.714286 1.83442C1.32857 0.658419 2.18571 0.994419 2.84286 1.00842C7.65714 1.07842 12.4429 0.798419 17.2 0.0424192C18.1857 -0.111581 19.0571 0.294419 19.9143 0.938419V0.924419ZM13.4571 2.40842C13.4571 2.40842 13.3571 2.36642 13.3143 2.36642C13.3 2.36642 13.2857 2.43642 13.2571 2.47842C13.3143 2.49242 13.3571 2.52042 13.4143 2.52042C13.4286 2.52042 13.4429 2.45042 13.4714 2.40842H13.4571Z" fill="#B0B0B0"/></svg>` + '</span>';
		}
	},
	breakpoints: {
		575.98: {
			slidesPerView: 2
		},
		991.98: {
			slidesPerView: 3
		}
	}
}) 

const partners = new Swiper('.swiper--partners', {
	slidesPerView: 1,
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next--partners',
		prevEl: '.swiper-button-prev--partners',
	},
	pagination: {
		el: '.swiper-pagination--partners',
		// type: 'bullets',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + `<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9143 0.924419C18.8857 2.39442 17.3714 1.61042 15.9286 2.03042C16.7571 2.07242 17.3857 1.98842 17.9429 2.17042C18.7857 2.43642 19.3571 3.05242 19.3 4.03242C19.2286 4.99842 18.4571 4.73242 17.8857 4.83042C12.5143 5.78242 7.14286 6.10442 1.7 5.46042C0.414286 5.30642 0 4.67642 0 3.61242C0.0142857 2.18442 1.18571 2.71642 1.87143 2.71642C5.11429 2.70242 8.37143 3.43042 11.5286 2.40842C8.1 2.08642 4.44286 2.99642 0.714286 1.83442C1.32857 0.658419 2.18571 0.994419 2.84286 1.00842C7.65714 1.07842 12.4429 0.798419 17.2 0.0424192C18.1857 -0.111581 19.0571 0.294419 19.9143 0.938419V0.924419ZM13.4571 2.40842C13.4571 2.40842 13.3571 2.36642 13.3143 2.36642C13.3 2.36642 13.2857 2.43642 13.2571 2.47842C13.3143 2.49242 13.3571 2.52042 13.4143 2.52042C13.4286 2.52042 13.4429 2.45042 13.4714 2.40842H13.4571Z" fill="#B0B0B0"/></svg>` + '</span>';
		}
	},
	breakpoints: {
		575.98: {
			slidesPerView: 2
		},
		991.98: {
			slidesPerView: 3
		}
	}
}) 

const omdBase = new Swiper('.swiper--omd-base', {
	slidesPerView: 1,
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next--omd-base',
		prevEl: '.swiper-button-prev--omd-base',
	},
	pagination: {
		el: '.swiper-pagination--omd-base',
		// type: 'bullets',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + `<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9143 0.924419C18.8857 2.39442 17.3714 1.61042 15.9286 2.03042C16.7571 2.07242 17.3857 1.98842 17.9429 2.17042C18.7857 2.43642 19.3571 3.05242 19.3 4.03242C19.2286 4.99842 18.4571 4.73242 17.8857 4.83042C12.5143 5.78242 7.14286 6.10442 1.7 5.46042C0.414286 5.30642 0 4.67642 0 3.61242C0.0142857 2.18442 1.18571 2.71642 1.87143 2.71642C5.11429 2.70242 8.37143 3.43042 11.5286 2.40842C8.1 2.08642 4.44286 2.99642 0.714286 1.83442C1.32857 0.658419 2.18571 0.994419 2.84286 1.00842C7.65714 1.07842 12.4429 0.798419 17.2 0.0424192C18.1857 -0.111581 19.0571 0.294419 19.9143 0.938419V0.924419ZM13.4571 2.40842C13.4571 2.40842 13.3571 2.36642 13.3143 2.36642C13.3 2.36642 13.2857 2.43642 13.2571 2.47842C13.3143 2.49242 13.3571 2.52042 13.4143 2.52042C13.4286 2.52042 13.4429 2.45042 13.4714 2.40842H13.4571Z" fill="#B0B0B0"/></svg>` + '</span>';
		}
	},
	breakpoints: {
		575.98: {
			slidesPerView: 2
		},
		991.98: {
			slidesPerView: 3
		}
	}
}) 

const omdTop = new Swiper('.swiper--omd-top', {
	slidesPerView: 1,
	spaceBetween: 24,
	navigation: {
		nextEl: '.swiper-button-next--omd-top',
		prevEl: '.swiper-button-prev--omd-top',
	},
	pagination: {
		el: '.swiper-pagination--omd-top',
		// type: 'bullets',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + `<svg width="20" height="6" viewBox="0 0 20 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9143 0.924419C18.8857 2.39442 17.3714 1.61042 15.9286 2.03042C16.7571 2.07242 17.3857 1.98842 17.9429 2.17042C18.7857 2.43642 19.3571 3.05242 19.3 4.03242C19.2286 4.99842 18.4571 4.73242 17.8857 4.83042C12.5143 5.78242 7.14286 6.10442 1.7 5.46042C0.414286 5.30642 0 4.67642 0 3.61242C0.0142857 2.18442 1.18571 2.71642 1.87143 2.71642C5.11429 2.70242 8.37143 3.43042 11.5286 2.40842C8.1 2.08642 4.44286 2.99642 0.714286 1.83442C1.32857 0.658419 2.18571 0.994419 2.84286 1.00842C7.65714 1.07842 12.4429 0.798419 17.2 0.0424192C18.1857 -0.111581 19.0571 0.294419 19.9143 0.938419V0.924419ZM13.4571 2.40842C13.4571 2.40842 13.3571 2.36642 13.3143 2.36642C13.3 2.36642 13.2857 2.43642 13.2571 2.47842C13.3143 2.49242 13.3571 2.52042 13.4143 2.52042C13.4286 2.52042 13.4429 2.45042 13.4714 2.40842H13.4571Z" fill="#B0B0B0"/></svg>` + '</span>';
		}
	},
	breakpoints: {
		575.98: {
			slidesPerView: 2
		},
		991.98: {
			slidesPerView: 3
		}
	}
}) 

const modalOpen = document.querySelectorAll('.modal-open')
const modalClose = document.querySelectorAll('.close-button')
const modal = document.querySelector('.modal')

if(modal) {
	modal.addEventListener('click', (e) => {
		if(!e.composedPath().includes(modal.querySelector('.modal__wrapper--active'))) {
			document.body.style.overflow = ''
			modal.classList.remove('modal--active')
			document.querySelectorAll('.modal__container').forEach(el => el.classList.remove('modal__container--active'))
			document.querySelectorAll('.modal__wrapper').forEach(el => el.classList.remove('modal__wrapper--active'))
		}
	})
}

if(modalOpen) {
	modalOpen.forEach((button) => {
		button.addEventListener('click', () => {
			let attr = button.getAttribute('data-modal')
			document.body.style.overflow = 'hidden'

			document.querySelectorAll('.modal__container').forEach(el => el.classList.remove('modal__container--active'))
			document.querySelectorAll('.modal__wrapper').forEach(el => el.classList.remove('modal__wrapper--active'))
			modal.classList.add('modal--active')
			
			document.querySelector(`.${attr}`).classList.add('modal__wrapper--active')
			document.querySelector(`.modal__container--${attr}`).classList.add('modal__container--active')
		})
	})
}

if(modalClose) {
	modalClose.forEach((button) => {
		button.addEventListener('click', (e) => {
			let attr = button.getAttribute('data-modal')
			document.body.style.overflow = ''

			if(attr === 'thanks') {
				e.preventDefault()
				setTimeout(() => {
					modal.classList.add('modal--active')
					document.querySelector(`.${attr}`).classList.add('modal__wrapper--active')
					document.querySelector(`.modal__container--${attr}`).classList.add('modal__container--active')
				}, 500)
			} else {
				modal.classList.remove('modal--active')
			}
			document.querySelectorAll('.modal__wrapper').forEach(el => el.classList.remove('modal__wrapper--active'))
			document.querySelectorAll('.modal__container').forEach(el => el.classList.remove('modal__container--active'))
		})
	})
}

const input = document.querySelectorAll('.input')

if(input.length > 0) {
	input.forEach(wrapper => {

		wrapper.querySelector('.input__input').addEventListener('input', (e) => {
			console.log(e.target.value)
			if(e.target.value.length > 0) {
				wrapper.classList.add('input--active')
			} else {
				wrapper.classList.remove('input--active')
			}
		})
	})
}

const video = document.querySelectorAll('.video')

video.forEach(video => {
	let played = false
	video.addEventListener('click', () => {
		// console.log(video.querySelector('video').paused)
		if(played) {
			video.classList.remove('video--active')
			played = false
		} else {
			video.classList.add('video--active')
			video.querySelector('video').play()
			played = true
		}
	})
})

const introLink = document.querySelectorAll('.intro-nav__link') 

window.addEventListener('scroll', () => {
	const firstBlock = document.querySelector('#stick')
	const secondBlock = document.querySelector('#light')
	const thirdBlock = document.querySelector('#base')
	const fourBlock = document.querySelector('#top')

	introLink.forEach(el => el.classList.remove('intro-nav__link--active'))
	introLink[0].classList.add('intro-nav__link--active')

	if(secondBlock.getBoundingClientRect().y - 50 < 0) {
		introLink.forEach(el => el.classList.remove('intro-nav__link--active'))
		introLink[1].classList.add('intro-nav__link--active')
	} else {
		introLink[1].classList.remove('intro-nav__link--active')
	}

	if(thirdBlock.getBoundingClientRect().y - 50 < 0) {
		introLink.forEach(el => el.classList.remove('intro-nav__link--active'))
		introLink[2].classList.add('intro-nav__link--active')
	} else {
		introLink[2].classList.remove('intro-nav__link--active')
	}

	if(fourBlock.getBoundingClientRect().y - 50 < 0) {
		introLink.forEach(el => el.classList.remove('intro-nav__link--active'))
		introLink[3].classList.add('intro-nav__link--active')
	} else {
		introLink[3].classList.remove('intro-nav__link--active')
	}
})

const faqs = document.querySelectorAll('.faq-item')

faqs.forEach(faq => {
	faq.querySelector('.faq-item__header').addEventListener('click', () => {
		if(!faq.classList.contains('faq-item--active')) {
			faqs.forEach(el => {
				const panel = el.querySelector('.faq-item__content');
				el.classList.remove('faq-item--active')
				panel.style.maxHeight = null;
			})
		}
    const panel = faq.querySelector('.faq-item__content');
    if (panel.style.maxHeight) {
			faq.classList.remove('faq-item--active')
			panel.style.maxHeight = null;
    } else {
			faq.classList.add('faq-item--active')
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
	})
})