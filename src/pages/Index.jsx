// Update this page (the content is just a fallback if you fail to update the page)

import { useState } from 'react';
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { HelpCircle } from "lucide-react"

const Index = () => {
  const [totalCost, setTotalCost] = useState(245);

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Total Monthly Cost:</h1>
        <div className="flex items-center">
          <span className="mr-2">€</span>
          <Input
            type="number"
            value={totalCost}
            onChange={(e) => setTotalCost(Number(e.target.value))}
            className="w-24"
          />
          <span className="ml-2">total</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Help</button>
      </div>

      <div className="space-y-6">
        <ConfigItem
          label="IBM i release:"
          inputType="select"
          options={['V7R5']}
          helpText="Select the IBM i release version"
        />

        <ConfigItem
          label="CPU core units (€ 200 per 0.05c) dedicated:"
          inputType="slider"
          min={0}
          max={1}
          step={0.05}
          defaultValue={0.05}
          helpText="Adjust the CPU core units"
          cost={200}
        />

        <ConfigItem
          label="dynamic CPU power option (uncap):"
          inputType="select"
          options={['no dynamic CPU power (fixed performance)']}
          helpText="Choose the dynamic CPU power option"
          cost={0}
        />

        <ConfigItem
          label="main memory GB: (€ 20 per GB)"
          inputType="slider"
          min={0}
          max={16}
          step={1}
          defaultValue={2}
          helpText="Adjust the main memory"
          cost={40}
        />

        <ConfigItem
          label="high speed Flash-based SAN: (€ 8 per 100GB)"
          inputType="slider"
          min={0}
          max={1000}
          step={100}
          defaultValue={0}
          helpText="Adjust the high speed Flash-based SAN"
          cost={0}
        />

        <ConfigItem
          label="normal speed HDD-based SAN: (€ 5 per 100GB)"
          inputType="slider"
          min={0}
          max={1000}
          step={100}
          defaultValue={100}
          helpText="Adjust the normal speed HDD-based SAN"
          cost={5}
        />

        <ConfigItem
          label="Mirror all disks? (all hdd prices double!)"
          inputType="select"
          options={['no mirror (normal RAID6)']}
          helpText="Choose disk mirroring option"
        />

        <ConfigItem
          label="WDS users (€ 79 per concurrent user):"
          inputType="slider"
          min={0}
          max={10}
          step={1}
          defaultValue={0}
          helpText="Adjust the number of WDS users"
          cost={0}
        />

        <ConfigItem
          label="backup option:"
          inputType="select"
          options={['no backup']}
          helpText="Choose the backup option"
          cost={0}
        />

        <ConfigItem
          label="PTF option:"
          inputType="select"
          options={['no PTF loading (for old releases)']}
          helpText="Choose the PTF option"
          cost={0}
        />

        <ConfigItem
          label="Service options:"
          inputType="select"
          options={['no additional services included']}
          helpText="Choose additional service options"
          cost={0}
        />

        <ConfigItem
          label="primary language:"
          inputType="select"
          options={['2924 - english (default)']}
          helpText="Choose the primary language"
        />
      </div>
    </div>
  );
};

const ConfigItem = ({ label, inputType, options, min, max, step, defaultValue, helpText, cost }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
      <div className="flex-1">
        <label className="font-medium">{label}</label>
        {inputType === 'select' && (
          <Select>
            <Select.Trigger className="w-full mt-1">
              <Select.Value placeholder={options[0]} />
            </Select.Trigger>
            <Select.Content>
              {options.map((option, index) => (
                <Select.Item key={index} value={option}>
                  {option}
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        )}
        {inputType === 'slider' && (
          <div className="flex items-center mt-1">
            <Slider
              min={min}
              max={max}
              step={step}
              defaultValue={[defaultValue]}
              className="w-full mr-4"
            />
            <Input type="number" className="w-20" defaultValue={defaultValue} />
          </div>
        )}
      </div>
      {cost !== undefined && (
        <div className="flex items-center ml-4">
          <span className="mr-2">€</span>
          <Input type="number" className="w-20" value={cost} readOnly />
        </div>
      )}
      <HelpCircle className="w-5 h-5 ml-4 text-gray-400 cursor-help" title={helpText} />
    </div>
  );
};

export default Index;
