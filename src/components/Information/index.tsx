import Image from 'next/image'
import React from 'react'
import banner from '../../assets/images/Rectangle-2.jpg'
import avatar from '../../assets/images/Rounded-rectangle.jpg'

export interface InformationProps {}

const Information: React.FC<InformationProps> = ({}) => {

  return (
    <>
        <div className="information relative">
            <div className="banner-avatar">
              <Image src={banner} alt=''/>
            </div>
        </div>
        <div className="profile px-4 pb-9">
          <div className="avatar relative z-30 pb-3">
            <Image className='avatar-border' src={avatar} width={68} height={68} alt=''/>
          </div>
          <div className="profile-name">
            <label className='title title-name block'>梅村 さおり</label>
            <label className='des des-address'>最終ログイン：55分前</label>
          </div>
        </div>
    </>
  )
}

export default Information
