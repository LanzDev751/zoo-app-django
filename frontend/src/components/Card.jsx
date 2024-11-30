
export default function Card({title, body}) {
	
  return (
	<li className="link-card" style={{color: 'white'}}>
		<a href='#'>
			<h2>
				{title}
				<span>&rarr;</span>
			</h2>
			<p>
				{body}
			</p>
		</a>
	</li>
  )
}




