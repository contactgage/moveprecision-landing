/*
 * MoveForce Quote/Inventory Page
 * Design: Premium, professional quote builder with glassmorphic design
 * Dark navy + gold aesthetic matching landing page
 * Includes customer info, move details, pricing, and AI inventory scanner
 */
import { useState, useRef } from "react";
import { ArrowLeft, Upload, AlertCircle, CheckCircle2, Zap } from "lucide-react";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    moveDate: "",
    originAddress: "",
    destinationAddress: "",
    crewSize: "2",
    trucks: "1",
    hourlyRate: "120",
    estimatedHours: "4",
    fuelSurcharge: "0",
    packingFee: "0",
    longCarryFee: "0",
    startFee: "0",
    storageFee: "0",
    discount: "0",
    distance: "20",
    tipRate: "0",
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Calculate estimate
  const laborCost = parseFloat(formData.hourlyRate) * parseFloat(formData.estimatedHours);
  const additionalFees =
    parseFloat(formData.fuelSurcharge) +
    parseFloat(formData.packingFee) +
    parseFloat(formData.longCarryFee) +
    parseFloat(formData.startFee) +
    parseFloat(formData.storageFee);
  const subtotal = laborCost + additionalFees;
  const discountAmount = (subtotal * parseFloat(formData.discount)) / 100;
  const total = subtotal - discountAmount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files));
    }
  };

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      setUploadedFiles(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <div
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #0A0E1A 0%, #0D1525 50%, #0A0E1A 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(232,160,32,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(232, 160, 32, 0.1)",
                border: "1px solid rgba(232, 160, 32, 0.2)",
                color: "#E8A020",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.1)";
              }}
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1
                className="text-3xl font-bold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
              >
                New Quote
              </h1>
              <p style={{ color: "#94A3B8" }} className="text-sm mt-1">
                Create a professional moving estimate
              </p>
            </div>
          </div>
          <button
            className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
            style={{
              background: "#E8A020",
              color: "#0A0E1A",
              transform: "scale(1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Save Quote
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Info Card */}
            <div
              className="rounded-2xl p-6 backdrop-blur-sm"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(232, 160, 32, 0.15)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                className="text-lg font-bold mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
              >
                <span style={{ color: "#E8A020" }}>●</span> Customer Info
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.4)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.2)";
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.4)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.2)";
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.4)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.2)";
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Move Date
                  </label>
                  <input
                    type="date"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.4)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.2)";
                    }}
                  />
                </div>
                <div className="col-span-2">
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Origin Address
                  </label>
                  <input
                    type="text"
                    name="originAddress"
                    value={formData.originAddress}
                    onChange={handleInputChange}
                    placeholder="123 Main St, City, State"
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.4)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.2)";
                    }}
                  />
                </div>
                <div className="col-span-2">
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Destination Address
                  </label>
                  <input
                    type="text"
                    name="destinationAddress"
                    value={formData.destinationAddress}
                    onChange={handleInputChange}
                    placeholder="456 Oak Ave, City, State"
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.4)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.2)";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Move Details & Pricing Card */}
            <div
              className="rounded-2xl p-6 backdrop-blur-sm"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(232, 160, 32, 0.15)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                className="text-lg font-bold mb-6"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
              >
                <span style={{ color: "#E8A020" }}>●</span> Move Details & Pricing
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Crew Size
                  </label>
                  <select
                    name="crewSize"
                    value={formData.crewSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                  >
                    <option value="1">1 Mover</option>
                    <option value="2">2 Movers</option>
                    <option value="3">3 Movers</option>
                    <option value="4">4 Movers</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Trucks
                  </label>
                  <select
                    name="trucks"
                    value={formData.trucks}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                  >
                    <option value="1">1 Truck</option>
                    <option value="2">2 Trucks</option>
                    <option value="3">3 Trucks</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Hourly Rate ($)
                  </label>
                  <input
                    type="number"
                    name="hourlyRate"
                    value={formData.hourlyRate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Est. Hours
                  </label>
                  <input
                    type="number"
                    name="estimatedHours"
                    value={formData.estimatedHours}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                  />
                </div>
              </div>

              {/* Additional Fees */}
              <div className="mb-6 pb-6 border-b" style={{ borderColor: "rgba(232, 160, 32, 0.1)" }}>
                <p style={{ color: "#94A3B8" }} className="text-xs font-semibold mb-3 uppercase">
                  Additional Fees
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Fuel Surcharge ($)", name: "fuelSurcharge" },
                    { label: "Packing Fee ($)", name: "packingFee" },
                    { label: "Long Carry Fee ($)", name: "longCarryFee" },
                    { label: "Start Fee ($)", name: "startFee" },
                    { label: "Storage Fee ($)", name: "storageFee" },
                    { label: "Discount (%)", name: "discount" },
                  ].map((fee) => (
                    <div key={fee.name}>
                      <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                        {fee.label}
                      </label>
                      <input
                        type="number"
                        name={fee.name}
                        value={formData[fee.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(232, 160, 32, 0.2)",
                          color: "#F0EDE8",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Distance & Tip */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Distance (miles)
                  </label>
                  <input
                    type="number"
                    name="distance"
                    value={formData.distance}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: "#94A3B8" }} className="text-sm font-medium block mb-2">
                    Tip Rate (%)
                  </label>
                  <input
                    type="number"
                    name="tipRate"
                    value={formData.tipRate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(232, 160, 32, 0.2)",
                      color: "#F0EDE8",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* AI Inventory Scanner Card */}
            <div
              className="rounded-2xl p-6 backdrop-blur-sm"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(232, 160, 32, 0.15)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                className="text-lg font-bold mb-6 flex items-center gap-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
              >
                <Zap size={20} style={{ color: "#E8A020" }} />
                AI Inventory Scanner
              </h2>
              <div
                className="rounded-xl p-8 text-center border-2 border-dashed transition-all duration-200 cursor-pointer"
                style={{
                  borderColor: "rgba(232, 160, 32, 0.3)",
                  background: "rgba(232, 160, 32, 0.05)",
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.6)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.12)";
                }}
                onDragLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 160, 32, 0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(232, 160, 32, 0.05)";
                }}
                onDrop={handleDragDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={32} style={{ color: "#E8A020", margin: "0 auto 12px" }} />
                <p style={{ color: "#F0EDE8" }} className="font-semibold mb-2">
                  Drop photos or videos here
                </p>
                <p style={{ color: "#94A3B8" }} className="text-sm">
                  or <span style={{ color: "#E8A020" }}>browse</span> to select files
                </p>
                <p style={{ color: "#64748B" }} className="text-xs mt-3">
                  JPG, PNG, WEBP, MP4, MOV — Up to 10 files
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              {/* Uploaded Files */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6 space-y-2">
                  <p style={{ color: "#94A3B8" }} className="text-sm font-medium">
                    Uploaded Files ({uploadedFiles.length})
                  </p>
                  {uploadedFiles.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg"
                      style={{
                        background: "rgba(232, 160, 32, 0.08)",
                        border: "1px solid rgba(232, 160, 32, 0.2)",
                      }}
                    >
                      <CheckCircle2 size={18} style={{ color: "#E8A020" }} />
                      <span style={{ color: "#F0EDE8" }} className="text-sm">
                        {file.name}
                      </span>
                      <span style={{ color: "#64748B" }} className="text-xs ml-auto">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Estimate Summary */}
          <div
            className="rounded-2xl p-6 backdrop-blur-sm h-fit sticky top-8"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "2px solid rgba(232, 160, 32, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(232,160,32,0.1)",
            }}
          >
            <h3
              className="text-lg font-bold mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#F0EDE8" }}
            >
              Estimate Summary
            </h3>

            {/* Summary Items */}
            <div className="space-y-3 mb-6 pb-6 border-b" style={{ borderColor: "rgba(232, 160, 32, 0.1)" }}>
              <div className="flex justify-between text-sm">
                <span style={{ color: "#94A3B8" }}>Labor ({formData.estimatedHours}h @ ${formData.hourlyRate}/hr)</span>
                <span style={{ color: "#F0EDE8" }}>${laborCost.toFixed(2)}</span>
              </div>
              {additionalFees > 0 && (
                <div className="flex justify-between text-sm">
                  <span style={{ color: "#94A3B8" }}>Additional Fees</span>
                  <span style={{ color: "#F0EDE8" }}>${additionalFees.toFixed(2)}</span>
                </div>
              )}
              {discountAmount > 0 && (
                <div className="flex justify-between text-sm">
                  <span style={{ color: "#94A3B8" }}>Discount ({formData.discount}%)</span>
                  <span style={{ color: "#E8A020" }}>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="mb-6 p-4 rounded-lg" style={{ background: "rgba(232, 160, 32, 0.08)" }}>
              <div className="flex justify-between items-center">
                <span style={{ color: "#94A3B8" }} className="font-medium">
                  Total Estimate
                </span>
                <span
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#E8A020" }}
                >
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Info Box */}
            <div
              className="p-4 rounded-lg flex gap-3 mb-6"
              style={{
                background: "rgba(232, 160, 32, 0.05)",
                border: "1px solid rgba(232, 160, 32, 0.15)",
              }}
            >
              <AlertCircle size={18} style={{ color: "#E8A020", flexShrink: 0 }} />
              <p style={{ color: "#94A3B8" }} className="text-xs leading-relaxed">
                This is a preliminary estimate. Final pricing may vary based on actual inventory and conditions.
              </p>
            </div>

            {/* Save Button */}
            <button
              className="w-full py-3 rounded-lg font-semibold transition-all duration-200"
              style={{
                background: "#E8A020",
                color: "#0A0E1A",
                transform: "scale(1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Save Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
