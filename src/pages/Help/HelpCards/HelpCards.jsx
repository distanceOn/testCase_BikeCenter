import Button from '../../../UI/Button';
import Img from '../../../UI/Img';
import String from '../../../UI/String';
import s from './HelpCards.module.scss';
function HelpCards() {
	return (
		<>
			<div className={s.container}>
				<div className={s.cards__1}>
					<div className={s.cards__small}>
						<div className={s.card__1 + ' ' + s.card + ' ' + s.card__grey}>
							<Img style={s.gears} url="Gears" alt="gears" />
							<div style={{ marginBottom: '0.3125vw' }}>
								<String style={s.title} value="Мы всегда рады помочь" />
							</div>
							<div style={{ marginBottom: '0.78125vw' }}>
								<String
									style={s.subtitle}
									value="Если у вас есть нерешенный вопрос
								"
								/>
							</div>
							<Button
								style={s.button}
								type="button"
								value="Напишите нам в чат"
							/>
						</div>
						<div className={s.card__2 + ' ' + s.card + ' ' + s.card__grey}>
							<Img style={s.pay} url="Pay" alt="pay" />
							<String style={s.title} value="Оплата" />
							<div className={s.subtitle__container}>
								<String
									style={s.subtitle + ' ' + s.subtitle__line}
									value="Как оплатить заказ"
								/>
								<String
									style={s.subtitle + ' ' + s.subtitle__line}
									value="Наложенный платёж"
								/>
								<String
									style={s.subtitle + ' ' + s.subtitle__line}
									value="Оплата электронными деньгами"
								/>
								<String
									style={s.subtitle + ' ' + s.subtitle__line}
									value="Как оплатить если нет карты"
								/>
								<String
									style={s.subtitle + ' ' + s.subtitle__line}
									value="Подарочные карты"
								/>
							</div>
						</div>
					</div>
					<div className={s.card__3 + ' ' + s.card + ' ' + s.card__grey}>
						<div>
							<div style={{ marginBottom: '0.625vw' }}>
								<String style={s.title} value="Легкий возврат" />
							</div>
							<div style={{ marginBottom: '1.25vw', width: '20.3645833333vw' }}>
								<String
									style={s.subtitle}
									value="Вернуть товары легко и удобно, если сохранён его товарный вид и потребительские свойства."
								/>
							</div>
							<Button style={s.button} type="button" value="Узнать подробнее" />
						</div>
						<Img style={s.boxes} url="Boxes" alt="boxes" />
					</div>
				</div>
				<div className={s.cards__2}>
					<div className={s.card__4 + ' ' + s.card + ' ' + s.card__yellow}>
						<Img style={s.coin__1} url="Coin1" alt="coin" />
						<Img style={s.coin__2} url="Coin2" alt="coin" />
						<Img style={s.coin__3} url="Coin3" alt="coin" />
						<Img style={s.thunder} url="Thunder" alt="thunder" />
						<Img style={s.rupor} url="Rupor" alt="rupor" />

						<div style={{ marginBottom: '0.3125vw' }}>
							<String
								style={s.title + ' ' + s.white}
								value="Бонусная система"
							/>
						</div>
						<ul
							style={{ lineHeight: '0.9895833333vw', paddingLeft: '1.1vw' }}
							className={s.subtitle + ' ' + s.white}
						>
							<li>Покупай</li>
							<li>Управляй заказами</li>
							<li>Накапливай cashback—бонусы</li>
						</ul>
					</div>
					<div
						className={s.card__5 + ' ' + s.card + ' ' + s.card__grey_reversed}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column ',
								gap: '0.15625vw',
							}}
						>
							<div style={{ marginBottom: '0.3125vw' }}>
								<String style={s.title} value="Гарантия" />
							</div>
							<div style={{ width: '17.7083333333vw' }}>
								<String
									style={s.subtitle}
									value="Информацию по всем вопросам гарантии
							можно узнать тут. "
								/>
							</div>
						</div>
						<Button
							content={<Img style={s.row} url="RowRight" />}
							contentStyle={s.button__content}
							style={s.button + ' ' + s.button__row}
							type="button"
							value="Гарантийные талоны"
						/>
					</div>
					<div
						className={s.card__6 + ' ' + s.card + ' ' + s.card__grey_reversed}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column ',
							}}
						>
							<div style={{ marginBottom: '0.625vw' }}>
								<String style={s.title} value="Доставка" />
							</div>
							<div style={{ marginBottom: '1.25vw', width: '15.8854166667vw' }}>
								<String
									style={s.subtitle}
									value="Стоимость доставки будет зависеть от города в котором вы находитесь"
								/>
							</div>

							<Button
								content={<Img style={s.row} url="RowRight" />}
								contentStyle={s.button__content}
								style={s.button + ' ' + s.button__row}
								type="button"
								value="Расчитать доставку"
							/>
						</div>
						<Img style={s.car} url="Car" alt="car" />
					</div>
				</div>
			</div>
		</>
	);
}

export default HelpCards;
