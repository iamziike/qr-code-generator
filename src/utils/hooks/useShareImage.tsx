import toast from "react-hot-toast";

const useShareImage = () => {
  const shareImage = async (imageSrc: string) => {
    toast.remove();

    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: blob.type });

      if (navigator.share) {
        await navigator.share({
          files: [file],
        });
      } else {
        toast.error("Sharing is not supported in this browser");
      }
    } catch (error) {
      toast.error(`Error sharing image: ${(error as Error)?.message}`);
    }
  };

  return { shareImage };
};

export default useShareImage;
