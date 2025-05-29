import React from 'react';

const DriveImage = () => {
  const imageUrl = 'https://drive.google.com/uc?export=view&id=1k1cgJajHaNdbK_JiGKzQM_cIqpBejl_q';

  return (
    <div className="flex justify-center p-4">
      <img
        src={imageUrl}
        alt="Drive Image"
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default DriveImage;
