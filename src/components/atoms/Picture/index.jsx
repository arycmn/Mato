import { Container, Filter, Text } from "./style";

const Picture = ({
  filter,
  alt,
  src,
  picturetype,
  height,
  width,
  filterColor,
  filterOpacity,
  pictureText,
  textWeight,
  onClick,
}) => {
  return (
    <Container>
      <img
        src={src}
        alt={alt}
        picturetype={picturetype}
        height={height}
        width={width}
        onClick={onClick}
      />
      {filter && (
        <Filter
          height={height}
          width={width}
          filterColor={filterColor}
          filterOpacity={filterOpacity}
        />
      )}
      {pictureText && <Text textWeight={textWeight}>{pictureText}</Text>}
    </Container>
  );
};

export default Picture;
