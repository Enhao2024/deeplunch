interface Props {
  queryString: string,
  pcWidth: number,
  pcHeight: number,
  mbWidth: number,
  mbHeight: number,
  zoom: number,
  mapType: string,
}

function Map({
  queryString, pcWidth, pcHeight, mbWidth, mbHeight, zoom, mapType,
}: Props) {
  const API_KEY = process.env.GOOGLE_API_KEY;

  if (!API_KEY) return null;

  return (
    <>
      <div className="hidden lg:block">
        <iframe
          title="Food Map"
          width={pcWidth}
          height={pcHeight}
          src={`https://www.google.com/maps/embed/v1/search?maptype=${mapType}&zoom=${zoom}${queryString}&key=${API_KEY}`}
        />
      </div>
      <div className="lg:hidden">
        <iframe
          title="Food Map"
          width={mbWidth}
          height={mbHeight}
          src={`https://www.google.com/maps/embed/v1/search?zoom=${zoom}${queryString}&key=${API_KEY}`}
        />
      </div>
    </>
  );
}

export default Map;
