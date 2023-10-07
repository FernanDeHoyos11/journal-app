import { ImageList, ImageListItem } from "@mui/material";
import  { useState } from "react";

export const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
        {images?.map((image) => (
          <ImageListItem
            key={image}
            onClick={() => handleImageClick(image)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={`${image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="Imagen de nota"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={handleCloseImage}
        >
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </div>
  );
};
