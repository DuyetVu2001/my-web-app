import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import post from '../assets/img/post.jpg';
import './PostDetail.scss';

const PostDetail = () => {
   return (
			<Container>
				<div className="post-detail">
					<Grid container spacing={4}>
						<Grid item xs={12} sm={12} md={7}>
							<div className="post-detail__img">
								<img src={post} alt="" />
							</div>
						</Grid>
						<Grid item xs={12} sm={12} md={5}>
							<h2 className="post-detail__title">
								Nunc accumsan ex ligula, in sapien consectetur.
							</h2>
						</Grid>
					</Grid>

					<Grid container>
						<p>
							<span>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
								pariatur hic reprehenderit! Expedita ratione laborum eum
								molestias nostrum iste praesentium consequuntur error eligendi,
								illo reiciendis accusamus architecto itaque magnam deleniti.
							</span>
							<span>
								Dolorem alias fuga numquam, itaque eveniet ipsam porro vitae!
								Aliquid totam voluptate eligendi laudantium deserunt tenetur
								sequi beatae, neque obcaecati reprehenderit eum nostrum
								blanditiis, est aut maiores! Labore, accusamus incidunt!
							</span>
							<span>
								Non, libero. Consequatur aspernatur neque sint iure error soluta
								illo amet totam, voluptatibus unde eos porro quisquam
								repudiandae rem voluptatem nihil doloribus accusantium veniam
								inventore, quam similique voluptatum beatae molestias.
							</span>
							<span>
								Numquam nihil modi aperiam odio cupiditate totam delectus rem
								deserunt voluptatibus corporis ipsa dolorum, quod inventore quae
								fugit similique porro! Provident animi voluptatem eveniet modi
								alias ex! Quia, cum doloremque!
							</span>
							<span>
								Numquam modi enim placeat error nesciunt nam sint nihil quisquam
								totam unde voluptatum expedita, veniam porro facilis vero nobis
								ad nemo molestias deleniti. Culpa illo dolore, nisi tempore
								exercitationem minima.
							</span>
							<span>
								Sit quidem fugit natus, nesciunt provident voluptatum mollitia
								vero, culpa voluptate esse, est dolor temporibus sequi alias.
								Amet quas, accusantium quam veritatis tempora, saepe ea voluptas
								doloremque, nemo deserunt cum?
							</span>
							<span>
								Aliquid alias voluptates explicabo consequatur necessitatibus
								illo in eum voluptas, aperiam iusto eos architecto eveniet
								repellendus maiores et error aspernatur quibusdam laboriosam quo
								atque, itaque doloremque adipisci eius! Eius, impedit.
							</span>
							<span>
								Eos, obcaecati eveniet fugiat vel, dolor reprehenderit possimus
								sequi recusandae sed neque veniam expedita. Aliquam, asperiores
								temporibus! Fuga fugiat labore, ipsum soluta quibusdam tenetur
								eum eveniet dicta suscipit et animi.
							</span>
							<span>
								Asperiores neque itaque et dolore. Quo tenetur vero dicta
								perferendis! Maxime rerum reprehenderit itaque laudantium
								aliquam doloremque voluptatibus molestias rem ratione nisi quod
								sequi ab tempora quia eum, saepe quisquam.
							</span>
							<span>
								Corrupti corporis odit vitae ut soluta, sint ipsam facilis
								repellat ipsum repudiandae ex quos cum nulla doloribus officiis
								earum hic quam sit necessitatibus molestiae? Accusantium et
								exercitationem voluptas doloremque assumenda!
							</span>
						</p>
					</Grid>
				</div>
			</Container>
		);
}

export default PostDetail
