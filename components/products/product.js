
export default function Product(props) {
    const { id, title, image, price } = props;

    const exploreLink = `/products/${id}`;  

    return (
    <div>
    <a key={id} href={exploreLink} className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
    </a>
    </div>
    )
  }