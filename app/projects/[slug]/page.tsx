import React from 'react'

const page = ({ params }: { params: { slug: string } }) => {
  return (
	<div>Projeto: {params.slug}</div>
  )
}

export default page