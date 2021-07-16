import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import post from '../../assets/img/post.jpg';
import './PostDetail.scss';

const PostDetail = () => {
	return (
		<Container>
			<div className="post-detail">
				<header className="post-detail__header">
					<div className="color"></div>
					<div className="color"></div>
					<div className="color"></div>

					<Grid container spacing={4} style={{ marginTop: 160 }}>
						{/* Image */}
						<Grid item xs={12} sm={12} md={7}>
							<div className="post-detail__img">
								<img src={post} alt="" />
							</div>
						</Grid>
						{/* End */}

						{/* Title */}
						<Grid item xs={12} sm={12} md={5}>
							<div className="post-detail__title">
								<h2>
									Etenim semper illud extra est, quod arte comprehenditur.
								</h2>
								<p className="post-detail__author">Emmet / March 11, 2000</p>

								{/* Contact */}
								<div className="post-detail__contacts">
									<span className="post-detail__icon">
										<i className="fab fa-instagram-square"></i>
									</span>
									<span className="post-detail__icon">
										<i className="fab fa-twitter-square"></i>
									</span>
									<span className="post-detail__icon">
										<i className="fab fa-facebook-square"></i>
									</span>
								</div>
								{/* End */}
							</div>
						</Grid>
						{/* End */}
					</Grid>
				</header>

				{/* Main content */}
				<Grid container style={{ marginTop: 60 }}>
					<Grid item xs={0} sm={0} md={2} />

					<Grid item xs={12} sm={12} md={8}>
						<article className="post-detail__article">
							<p>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Quidem nulla molestiae quis optio qui vel similique
									consequatur exercitationem, facere voluptatibus facilis
									accusamus doloribus. Et eius reprehenderit sit? Dolor, amet
									iusto.
								</span>
								<span>
									Distinctio et harum possimus tempore accusantium sint saepe
									voluptatem, nobis ipsam sequi doloremque minus asperiores
									maiores, pariatur ex tenetur? Repellat veniam consectetur
									impedit doloremque, pariatur ea cum reiciendis doloribus!
									Iure!
								</span>
								<span>
									Eligendi aspernatur vitae in officiis laborum eum, adipisci
									cum natus magni quam, tempore corporis consectetur, soluta
									harum laboriosam iusto voluptatibus rem qui blanditiis
									exercitationem. Aut quisquam magni nobis perferendis
									asperiores!
								</span>
								<span>
									Nam similique, at magni pariatur cupiditate expedita. Expedita
									laboriosam molestiae provident, fugiat velit sequi atque,
									incidunt sed iure rem maiores ab, nostrum architecto amet? Quo
									molestiae culpa sequi quam dignissimos.
								</span>
								<span>
									Maxime quod asperiores magni praesentium officiis quaerat
									exercitationem ipsum velit neque? Cumque ipsa pariatur
									dignissimos quasi perspiciatis eos nemo non, asperiores
									consequatur corrupti esse sequi deleniti porro nulla inventore
									ea?
								</span>
								<span>
									Delectus placeat explicabo expedita ipsa quo nisi,
									perspiciatis ullam? Ab perferendis, quam, eveniet dolor
									praesentium ipsum placeat illum, voluptatem nobis consequatur
									iste officia architecto! Sit minima possimus magni pariatur
									quibusdam.
								</span>
								<span>
									Illo rerum nihil temporibus cupiditate nesciunt cum sequi nemo
									nisi, illum modi soluta officiis adipisci repellat consectetur
									aspernatur dicta dolore. Nisi accusantium deleniti earum esse
									molestias tempore, fugiat modi sed.
								</span>
								<span>
									Quo nulla esse recusandae natus officia, magnam temporibus
									tempore molestias nemo. Ducimus iure, quas labore minus cumque
									ipsum quisquam. Placeat nulla fugit quia aliquid molestias
									eaque inventore autem quos similique?
								</span>
								<span>
									Dolorem, asperiores. Eaque, facere in eos similique tempore,
									ad velit voluptas vel non cumque sapiente deleniti illum quo
									dicta aliquid, officia laboriosam dolores voluptate reiciendis
									incidunt provident quasi error nulla!
								</span>
								<span>
									Eos fugiat, temporibus quas molestiae delectus nemo vitae
									omnis voluptas doloribus! Commodi laboriosam rem quasi cumque
									enim voluptatibus veniam modi aut omnis, impedit tempore neque
									quos atque architecto aliquid cupiditate.
								</span>
								<span>
									Enim, pariatur, cupiditate accusamus doloribus voluptates
									voluptas obcaecati odit ab ad rem eius nesciunt tenetur
									veritatis. Voluptatibus, pariatur. Sequi eos quos error quae
									harum placeat fuga expedita perspiciatis deleniti! Dolorum.
								</span>
								<span>
									Quae iure possimus provident ratione perspiciatis! Corporis,
									deleniti facilis non, possimus quisquam consequuntur rerum ad
									in odio dolor inventore ratione assumenda repellat, minima
									excepturi quod maiores! Modi quam magnam maxime.
								</span>
								<span>
									Quasi nobis sunt aliquam, nisi aperiam saepe earum repellendus
									sint placeat sapiente quod iusto voluptas soluta delectus quia
									perferendis animi esse, eligendi eum ducimus asperiores
									architecto praesentium sed at? Sapiente.
								</span>
								<span>
									Tempore placeat distinctio doloremque, voluptates assumenda
									quo natus expedita cupiditate accusantium ut? Assumenda est
									earum omnis dolorum ipsam quia amet suscipit officia impedit?
									Possimus ex sapiente praesentium illo quasi voluptatum?
								</span>
								<span>
									Corrupti labore iste, explicabo commodi ad, nam eius doloribus
									autem, quia incidunt similique tempora accusamus laboriosam!
									Exercitationem magnam ab sapiente ut ratione vel, distinctio
									quaerat possimus fugiat similique velit quibusdam?
								</span>
								<span>
									Quo earum rerum in aut aliquam, dolores voluptate, voluptatem
									ab, fugit autem eaque consequatur velit natus nam recusandae
									ipsam molestiae error aliquid ea ratione dignissimos assumenda
									accusantium perferendis. Repellat, iusto.
								</span>
								<span>
									Voluptate totam eligendi dicta nesciunt nisi laborum, nemo
									ratione laudantium fuga quae beatae iste numquam molestias,
									similique non temporibus accusamus excepturi magni explicabo!
									Blanditiis minus cupiditate, excepturi explicabo perferendis
									dolorem.
								</span>
								<span>
									Dolorum repellendus soluta id dignissimos, reprehenderit,
									laboriosam nisi rem veniam impedit, sapiente ad suscipit
									provident magnam pariatur? Ipsa recusandae ea, quibusdam, sint
									totam quo veritatis veniam aliquam repellat, repellendus
									aliquid.
								</span>
								<span>
									Voluptate dignissimos fuga delectus quo voluptates neque sed
									nobis culpa. Praesentium possimus delectus libero rem itaque
									repellendus nemo obcaecati quaerat a, unde tempore
									dignissimos! Distinctio, repudiandae. Dolorum possimus ratione
									aliquid.
								</span>
								<span>
									Porro cumque incidunt exercitationem optio dolore ducimus quia
									officia? Non molestias repellat neque eos illum fugit earum
									ullam quasi eaque. Corrupti ullam natus tempore nihil quia
									fuga doloribus non quidem.
								</span>
								<span>
									Ipsum nihil quam, tempora non libero id expedita consectetur
									placeat delectus ducimus illo iure enim minus, soluta nemo aut
									facere repudiandae eum facilis vero officia sequi.
									Reprehenderit saepe esse enim!
								</span>
								<span>
									Sequi, enim. Quos provident cum, aliquam eos sint tenetur
									excepturi? Molestias dolores voluptatum quae quas modi iste,
									ducimus dicta ipsam saepe soluta dolore vero nobis recusandae
									quia ex provident aspernatur?
								</span>
								<span>
									Dolores quibusdam at voluptates laboriosam libero, nam magni
									facere aspernatur labore perferendis natus praesentium ipsa
									sit cumque totam quam provident, et perspiciatis quo
									voluptatem quaerat. Omnis alias culpa aspernatur tenetur!
								</span>
								<span>
									Ut dicta quisquam, nesciunt veritatis quas rerum nam
									repellendus, eveniet, ipsum incidunt ad quae. Explicabo ea
									officiis accusantium illo enim molestiae. Totam maxime, rem
									voluptatibus dicta unde aut quibusdam nostrum.
								</span>
								<span>
									Aspernatur inventore, atque a quas doloribus odit consequatur
									cupiditate cum eius. Perferendis accusantium, illum hic id eum
									earum fugiat nesciunt illo labore tempora harum porro dolor
									quaerat unde neque eius.
								</span>
								<span>
									Aperiam ad consectetur facilis iste saepe reiciendis?
									Assumenda eveniet obcaecati quibusdam officiis eaque, ab
									nostrum adipisci ratione nulla voluptatem harum necessitatibus
									exercitationem, magnam repellendus quia, architecto ullam.
									Neque, tempore. Provident!
								</span>
								<span>
									Quia magni nesciunt vel. Dolor debitis velit est fugiat eius
									in architecto quisquam, culpa nemo nam sint, qui laboriosam
									illum maxime fugit, nesciunt accusantium esse explicabo ipsum
									labore amet consequatur.
								</span>
								<span>
									Culpa tenetur error, omnis ipsam beatae corporis! Porro fugiat
									quae esse ratione laborum eos quaerat incidunt similique
									eligendi animi neque vel delectus doloribus cupiditate
									facilis, illum aspernatur et ullam minima.
								</span>
								<span>
									Cupiditate minus quas architecto illum ipsum expedita autem
									ratione beatae maxime sit. Optio numquam quas temporibus
									reprehenderit commodi suscipit sint molestiae asperiores quia
									autem a atque, omnis voluptates fugit sunt.
								</span>
								<span>
									Aperiam, illo? Ratione et nostrum, tenetur vel sed iusto natus
									veniam libero molestiae, perferendis minus voluptas molestias
									quis praesentium repellat eos rerum deserunt nulla. Ab ratione
									reiciendis inventore quibusdam doloribus.
								</span>
							</p>
						</article>
					</Grid>

					<Grid item xs={0} sm={0} md={2} />
				</Grid>
				{/* End main content*/}
			</div>
		</Container>
	);
};

export default PostDetail;
