import Button from '../../../UI/Button';
import Img from '../../../UI/Img';
import String from '../../../UI/String';
import s from './HelpFooter.module.scss';

function HelpFooter() {
	return (
		<>
			<footer className={s.footer}>
				<div className={s.footer__container}>
					<div className={s.footer__1}>
						<div className={s.container__1}>
							<div>
								<String style={s.title} value="Помощь" />
								<ul className={s.list}>
									<li className={s.text}>Как оплатить? </li>
									<li className={s.text}>Как получить?</li>
									<li className={s.text}>Пользовательское соглашение </li>
									<li className={s.text}>Бонусная программа</li>
								</ul>
							</div>
							<div>
								<String style={s.title} value="О нас" />
								<ul className={s.list}>
									<li className={s.text}>Ремонт и облуживание </li>
									<li className={s.text}>Прокат оборудования</li>
									<li className={s.text}>Наша история </li>
									<li className={s.text}>Мероприятия от Байк Центра</li>{' '}
									<li className={s.text}>Арендодателям</li>
									<li className={s.text}>Вакансии</li>
									<li className={s.text}>Контакты</li>
								</ul>
							</div>
							<div></div>
						</div>
						<div className={s.container__2}>
							<String style={s.title__small} value="Узнавай о скидках первым" />
							<div className={s.container__input}>
								<input
									placeholder="Введите свой e-mail"
									className={s.input}
									type="mail"
								/>
								<Button
									contentStyle={s.btn__div}
									style={s.btn}
									value="Подписаться"
									type="button"
								/>
							</div>
						</div>
					</div>
					<div className={s.footer__2}>
						<div className={s.container__3}>
							<div>
								<String style={s.title} value="Контакты" />
								<div>
									<String style={s.text} value="8 (800) 500-03-20" />
									<String style={s.text} value="8 (861) 202-58-40" />
								</div>
								<div
									style={{
										marginTop: '0.9895833333vw',
										display: 'flex',
										flexDirection: 'column',
										gap: '0.5208333333vw',
									}}
								>
									<div className={s.text_icon}>
										<Img style={s.icon} url="WhatsApp" alt="whatsapp" />
										<String style={s.text_small} value="WhatsApp" />
									</div>
									<div className={s.text_icon}>
										<Img style={s.icon} url="Telegram_small" alt="telegram" />
										<String style={s.text_small} value="Telegram" />
									</div>
								</div>
							</div>
							<div>
								<String
									style={s.title__small}
									value="Адреса в г. Краснодаре:"
								/>
								<ul style={{ marginTop: '-0.6vw' }} className={s.list}>
									<li className={s.text}>ул. Дорожная, 1Е (Яблоновский) </li>
									<li className={s.text}>ул. Сормовская, 2а</li>
									<li className={s.text}>ул. Красных Партизан, 237 </li>
									<li className={s.text}>ул. Российская, 131/5</li>
								</ul>
							</div>
						</div>
						<div className={s.container__4}>
							<String
								style={s.title__small + ' ' + s.title__small_margin}
								value="Скачайте наше приложение"
							/>
							<div className={s.social}>
								<Img style={s.qr} url="Qr" alt="qr" />
								<div className={s.social__btns}>
									<Button
										content={
											<Img style={s.appstore} url="Appstore" alt="appstore" />
										}
										contentStyle={s.social__btn + ' ' + s.social__btn_1}
										style={s.social__btn_reset}
										type="button"
									/>
									<Button
										content={
											<Img
												style={s.googleplay}
												url="Googleplay"
												alt="googleplay"
											/>
										}
										contentStyle={s.social__btn + ' ' + s.social__btn_2}
										style={s.social__btn_reset}
										type="button"
									/>
								</div>
							</div>
							<div className={s.links}>
								<Img style={s.links__item} url="VK" alt="vk" />
								<Img style={s.links__item} url="Youtube" alt="vk" />{' '}
								<Img style={s.links__item} url="Tiktok" alt="vk" />
							</div>
						</div>
					</div>
				</div>
				<div className={s.footer__bottom}>
					<hr
						style={{
							marginLeft: '-6.5vw',
							marginRight: '-13.75vw',
							borderColor: '#333333',
						}}
					/>
					<div className={s.bottom}>
						© 2022 <br />
						Сеть магазинов &ldquo;Байк Центр&ldquo; ® — bike-сentre.ru
					</div>
				</div>
			</footer>
		</>
	);
}

export default HelpFooter;
