import Button from '../../../UI/Button';
import Img from '../../../UI/Img';
import String from '../../../UI/String';
import s from './HelpInfo.module.scss';
function HelpInfo() {
	return (
		<>
			<div className={s.info}>
				<div className={s.content}>
					<String style={s.title} value="Как сделать заказ" />
					<div className={s.text}>
						<String
							style={s.text__letters}
							value="Мы делаем все возможное, чтобы максимально облегчить вам оформление заказа. Для того, чтобы сделать это:"
						/>
						<ul className={s.text__ul}>
							<li className={s.text__letters}>
								Перейдите в раздел{' '}
								<span style={{ textDecoration: 'underline' }}>«Каталог»</span>;
							</li>
							<li className={s.text__letters}>
								под понравившимся вам товаром нажать на зеленую кнопку «Купить»:
								это отправляет ваш заказ в виртуальную корзину;
							</li>
							<li className={s.text__letters}>
								переходите в корзину и оформляете заказ;
							</li>
							<li className={s.text__letters}>
								система автоматически зарегистрирует вас;
							</li>
							<li className={s.text__letters}>
								ожидайте смс и email уведомления о статусе вашего заказа. При
								возникновении вопросов будем рады помочь по телефону
								8(800)500-03-20.
							</li>
						</ul>
					</div>
				</div>
				<div className={s.content}>
					<String style={s.title} value="Легкий возврат" />
					<div className={s.text}>
						<String
							style={s.text__letters}
							value={
								<>
									Покупайте, пробуйте, вам понравится, если нет, мы вернем вам
									деньги! Без вопросов, заявлений и дополнительных комиссий.
									<br />
									Вы вправе передумать. Мы в «Байк Центре» понимаем это, и с
									радостью сделаем вам обмен на понравившийся вам товар или
									вернём деньги.
								</>
							}
						/>

						<ul className={s.text__ul}>
							<li className={s.text__letters}>
								Свяжитесь с нами по телефону или онлайн-чаты. Мы оформим вам
								бланк возврата и вышлем его вам на электронную почту;
							</li>
							<li className={s.text__letters}>
								распечатайте и заполните бланк, его нужно будет сдать вместе с
								заказом на указанном нами пункте выдачи ;
							</li>
							<li className={s.text__letters}>
								надёжно упакуйте товар в коробку, предотвращая трение изделий
								между собой и свободное перемещение товара внутри упаковки;
							</li>
							<li className={s.text__letters}>
								сдайте заказ в том же месте, где получали его или другом удобном
								вам партнёрском пункте выдачи заказов или магазине;
							</li>
						</ul>
						<String
							style={s.text__letters}
							value={
								<>
									Возврат и обмен товара производится на основании Закона РФ
									&ldquo;О защите прав потребителей&rdquo; и регулируется ст.
									18, 19, 20, 21.
									<br />
									<br />В случае доставки на дом и возникновения гарантийного
									случая/наличия брака у товара, мы самостоятельно и за свой
									счёт заберём от вас данный
									<br />
									товар.
								</>
							}
						/>
					</div>
				</div>
				<div className={s.content}>
					<String style={s.title} value="Обратная связь" />
					<div className={s.text}>
						<String
							style={s.text__letters}
							value="Если у вас есть предложения или замечания по работе интернет-магазина «Байк Центр», то вы всегда можете обратиться к нам:
"
						/>
						<ul className={s.text__ul}>
							<li className={s.text__letters}>
								в социальной сети &nbsp;
								<span style={{ textDecoration: 'underline' }}>ВКонтакте</span>;
							</li>
							<li className={s.text__letters}>
								по электронной почте руководителю интернет-магазина &nbsp;
								<span style={{ textDecoration: 'underline' }}>
									info@bike-centre.ru
								</span>
								;
							</li>
							<li className={s.text__letters}>
								написав отзыв о работе «Байк Центра».
							</li>
						</ul>
					</div>
				</div>
				<div className={s.content}>
					<String
						style={s.title__small}
						value="Не нашли то что нужно?
							"
					/>
					<String
						style={s.text__letters}
						value={
							<>
								Позвоните нам по номеру
								<span style={{ textDecoration: 'underline' }}>
									&nbsp;8 (800) 000000000
								</span>
							</>
						}
					/>
				</div>
			</div>
			<div className={s.info_mobile}>
				<div className={s.info__1}>
					<String style={s.title} value="Как сделать заказ" />
					<String
						style={s.text}
						value="Мы делаем все возможное, чтобы максимально облегчить вам оформление заказа. Для того, чтобы сделать это:"
					/>
					<ul className={s.ul}>
						<li className={s.ul__item}>Перейдите в раздел «Каталог»;</li>
						<li className={s.ul__item}>
							под понравившимся вам товаром нажать на зеленую кнопку «Купить»:
							это отправляет ваш заказ в виртуальную корзину;
						</li>
						<li className={s.ul__item}>
							переходите в корзину и оформляете заказ;{' '}
						</li>
						<li className={s.ul__item}>
							система автоматически зарегистрирует вас;
						</li>
						<li className={s.ul__item}>
							ожидайте смс и email уведомления о статусе вашего заказа. При
							возникновении вопросов будем рады помочь по телефону
							8(800)500-03-20.
						</li>
					</ul>
				</div>
				<div className={s.info__2}>
					<String style={s.title} value="Легкий возврат" />
					<div className={s.info__card}>
						<Img style={s.info__card__img} url="Boxes" alt="boxes" />
						<String
							style={s.subtitle}
							value="Мы в «Байк Центре» понимаем это, и с радостью сделаем вам обмен на понравившийся вам товар или вернём деньги."
						/>
						<ul className={s.info__card__ul}>
							<li className={s.info__card__ul__item}>
								Свяжитесь с нами по телефону или онлайн-чаты. Мы оформим вам
								бланк возврата и вышлем его вам на электронную почту;
							</li>
							<li className={s.info__card__ul__item}>
								распечатайте и заполните бланк, его нужно будет сдать вместе с
								заказом на указанном нами пункте выдачи ;
							</li>
							<li className={s.info__card__ul__item}>
								надёжно упакуйте товар в коробку, предотвращая трение изделий
								между собой и свободное перемещение товара внутри упаковки;
							</li>
							<li className={s.info__card__ul__item}>
								сдайте заказ в том же месте, где получали его или другом удобном
								вам партнёрском пункте выдачи заказов или магазине;
							</li>
						</ul>
					</div>
				</div>
				<div className={s.info__3}>
					<String style={s.title} value="Гарантия" />
					<String
						style={s.text}
						value="Информацию по всем вопросам, связанным с обменом, возвратом, ремонтом и взаимодействием с сервисным центром, вы можете уточнить непосредственно у сотрудников магазина или по телефону горячей линии."
					/>
					<Button
						content={<Img style={s.row} url="RowRight" />}
						contentStyle={s.btn__content}
						style={s.btn}
						type="button"
						value="Гарантийные талоны"
					/>
				</div>
				<div className={s.info__4}>
					<String style={s.title} value="Обратная связь" />
					<String
						style={s.text}
						value="Если у вас есть предложения или замечания по работе интернет-магазина «Байк Центр», то вы всегда можете обратиться к нам:"
					/>
					<ul className={s.ul}>
						<li className={s.ul__item}>в социальной сети ВКонтакте;</li>
						<li className={s.ul__item}>
							по электронной почте руководителю интернет-магазина
							info@bike-centre.ru;{' '}
						</li>
						<li className={s.ul__item}>
							написав отзыв о работе «Байк Центра».
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default HelpInfo;
