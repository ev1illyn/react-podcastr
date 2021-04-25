import { useRouter } from 'next/router';

export default function Episode() {
    let router = useRouter();
    return (
        <div>
            <h1>Hello World</h1>
            <h1>Router.query.slug</h1>
            <h1>{router.query.slug}</h1>
        </div>
    )
}