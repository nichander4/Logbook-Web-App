import AvatarGroup from 'src/@core/components/avatar-group'

const data = [
  {
    img: '/images/portrait/small/avatar-s-5.jpg'
  },
  {
    img: '/images/portrait/small/avatar-s-7.jpg'
  },
  {
    img: '/images/portrait/small/avatar-s-10.jpg'
  },
  {
    img: '/images/portrait/small/avatar-s-11.jpg'
  },
  {
    img: '/images/portrait/small/avatar-s-20.jpg'
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
