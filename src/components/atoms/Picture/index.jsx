import { Container, Filter, Text } from "./style";

const Picture = ({
  filter,
  alt,
  src,
  pictureType,
  height,
  width,
  filterColor,
  filterOpacity,
  pictureText,
  textWeight,
}) => {
  return (
    <Container >
      <img
        src={src}
        alt={alt}
        pictureType={pictureType}
        height={height}
        width={width}
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
