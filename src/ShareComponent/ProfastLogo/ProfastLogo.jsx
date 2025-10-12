import logo from "../../assets/images/logo.png"

const ProfastLogo = () => {
    return (
        <div className="flex items-end">
            <img src={logo} alt="logo" className="md:mb-3 mb-2 md:h-12 h-9" />
            <p className="md:text-3xl text-xl font-extrabold -ml-3">Profast</p>
        </div>
    );
};

export default ProfastLogo;