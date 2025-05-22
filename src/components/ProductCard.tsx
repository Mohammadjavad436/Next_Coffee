// ... existing code ...
<div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"> {/* Added group class for hover */}
    <div className="relative">
        {/* Product Image Container with Overlay */}
        <div className="relative w-full h-60 overflow-hidden">
            {/* Product Image */}
            <img className="w-full h-full object-cover" src={imageUrl} alt={persianName} />

            {/* Gray Overlay on Hover */}
            <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div> {/* Adjusted opacity to 40 for a lighter gray */}

            {/* Icons Overlay */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"> {/* Added z-10 to keep icons above overlay */}
                {/* Shuffle Icon Placeholder */}
// ... existing code ...