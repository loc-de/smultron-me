import logoUrl from "../assets/logo.svg";

export default function Logo() {
    return (
        <div className="logoWrap">
            <img className="logo" src={logoUrl} alt="smultron logo" />
        </div>
    );
}
