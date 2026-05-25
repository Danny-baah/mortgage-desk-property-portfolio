import AddressHero from "./components/AddressHero";
import AddressAbout from "./components/AddressAbout";
import AddressAmenities from "./components/AddressAmenities";
import AddressReturns from "./components/AddressReturns";
import AddressAccommodation from "./components/AddressAccommodation";
import AddressGallery from "./components/AddressGallery";
import AddressCTA from "./components/AddressCTA";

export default function TheAddressPage() {
  return (
    <main className="bg-white min-h-screen font-sans overflow-hidden">
      <AddressHero />
      <AddressAbout />
      <AddressAmenities />
      <AddressReturns />
      <AddressAccommodation />
      <AddressGallery />
    <AddressCTA />
    </main>
  );
}