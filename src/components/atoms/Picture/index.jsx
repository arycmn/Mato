import { Container, Filter,Text } from "./style";

const Picture = ({
    filter,
    src, 
    pictureType,
    height,
    width,
    filterColor,
    filterOpacity,
    pictureText,
    textWeight
  }) => {
  return (
    <Container 
      srcPicture={src} 
      pictureType={pictureType}
      height={height}
      width={width}
    >
      {filter && <Filter
        height={height}
        width={width}
        filterColor={filterColor}
        filterOpacity={filterOpacity}
      />}
      {pictureText && <Text 
        textWeight={textWeight}>
          {pictureText}
        </Text>}
    </Container>
  )
};

export default Picture;
