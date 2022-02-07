import Star from "./Star";

export default function Rating( { percent } ) {
    return (
        <>
            <div className="stars relative">
                <div className="stars-bg flex relative opacity-50" style={
                    { gap: '.05rem' }
                }>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                </div>

                <div className="flex stars-rating absolute inset-0 text-red-500" style={
                    {
                        gap: '.05rem',
                        zIndex: 10,
                        clipPath: `polygon( 0 0, ${percent}% 0,${percent}% 100%, 0 100%, 0 0 )` }
                }>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                    <Star></Star>
                </div>
            </div></>
    )
}