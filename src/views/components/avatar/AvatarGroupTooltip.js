import AvatarGroup from 'src/@core/components/avatar-group'

const data = [
  {
    title: 'Vinnie Mostowy',
    img: '/images/portrait/small/avatar-s-5.jpg'
  },
  {
    title: 'Elicia Rieske',
    img: '/images/portrait/small/avatar-s-7.jpg'
  },
  {
    title: 'Julee Rossignol',
    img: '/images/portrait/small/avatar-s-10.jpg'
  },
  {
    title: 'Darcey Nooner',
    img: '/images/portrait/small/avatar-s-11.jpg'
  },
  {
    title: 'Jenny Looper',
    img: '/images/portrait/small/avatar-s-20.jpg'
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
