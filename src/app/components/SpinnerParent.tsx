import Spinner from "./Spinner";

export default function SpinnerParent() {
  return (
<div className="z-50 fixed inset-0  flex justify-center items-center align-center bg-neutral-400 backdrop-blur-sm bg-white/20">
    <Spinner></Spinner>
</div>
  )
}