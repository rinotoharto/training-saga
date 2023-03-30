import Card from "../Card";

export default function Cards({ data }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4" style={{}}>
      {data?.products?.map((e) => (
        <Card
          key={e.title}
          img={e.thumbnail}
          text={e.description}
          title={e.title}
        />
      ))}
    </div>
  );
}
