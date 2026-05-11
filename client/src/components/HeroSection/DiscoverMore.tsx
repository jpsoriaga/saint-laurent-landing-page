import { MoveUpRight } from 'lucide-react';

export default function DiscoverMore() {
    return(
        <>
            <div className="flex font-inter font-normal text-base tracking-normal flex-col gap-y-5">
                <p>THE HOUSE<br />OF YVES SAINT LAURENT<br />
                <span className="italic">PARIS</span></p>

                <div className="flex gap-x-2">
                    <button className="underline underline-offset-5">DISCOVER MORE</button>
                    <MoveUpRight strokeWidth={1} />
                </div>
            </div>
        </>
    );
}