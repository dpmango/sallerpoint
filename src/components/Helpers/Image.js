import React from 'react';

const Image = (props) => {
  const { image } = props;
  const imgExt = image.split('.').pop()
  const imgName = image.slice(0, image.length - imgExt.length - 1)

  return (
    <React.Fragment>
      <img src={require(`../../images/${imgName}.${imgExt}`)} srcSet={require(`../../images/${imgName}@2x.${imgExt}`)  + ' 2x'} alt=""/>
    </React.Fragment>
  )
}

export default Image
