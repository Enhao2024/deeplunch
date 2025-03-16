interface Props {
  queryString: string,
  zoom: number,
  mapType: string,
}

function Map({
  queryString, zoom, mapType,
}: Props) {
  const API_KEY = process.env.GOOGLE_API_KEY;

  if (!API_KEY) return null;

  return (
    <div className="w-full h-[60vh] lg:h-80 2xl:h-[50vh]">
      <iframe
        className="w-full h-full"
        title="Food Map"
        src={`https://www.google.com/maps/embed/v1/search?maptype=${mapType}&zoom=${zoom}${queryString}&key=${API_KEY}`}
      />
    </div>
  );
}

export default Map;
