import React from 'react'
import './SidebarOption.css'

function SidebarOption({title, Icon, Image, onClickHandle}) {
  return (
    <div className='sidebarOption' onClick={()=>{onClickHandle()}}>
        {Icon && <Icon className="sidebarOption_icons" />}
        {Icon && <h4>{title}</h4>}
        {/*{Image && <img src={Image} className='sidebar_image' />} 
        {Image && <h4 className='playlist_title'>{title}</h4>} */}
    </div>
  )
}

export default SidebarOption