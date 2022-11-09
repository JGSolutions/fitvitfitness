import { getSortedPostsData } from '../../lib/posts';

async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default async function Page({ allPostsData }) {
    const d = await getStaticProps();
    console.log(d.props);
    return (
        <>
            <h1>Blog</h1>
        </>
    );
}