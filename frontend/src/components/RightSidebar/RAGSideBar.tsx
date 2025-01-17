import React from 'react';
import { useRecoilState } from 'recoil';

import { settingsState } from '../../state/settings';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

// Define types at the top of the file
interface RAGSettings {
  index: string;
  similarityThreshold: number;
  maxResults: number;
}

interface RAGSideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RAGSideBar: React.FC<RAGSideBarProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useRecoilState<{ rag?: RAGSettings }>(
    settingsState
  );

  const handleIndexChange = (value: string): void => {
    setSettings((prev) => ({
      ...prev,
      rag: {
        ...prev.rag,
        index: value,
        similarityThreshold: prev.rag?.similarityThreshold ?? 0.7,
        maxResults: prev.rag?.maxResults ?? 5
      }
    }));
  };

  return (
    <aside
      className={`fixed right-0 top-0 h-full w-80 bg-background border-l border-border transform transition-transform duration-200 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">RAG Settings</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            ✕
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="index">Index Name</Label>
            <Input
              id="index"
              value={settings.rag?.index || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleIndexChange(e.target.value)
              }
              placeholder="Enter index name"
              className="w-full"
            />
          </div>

          {/* Add more RAG settings here */}
        </div>
      </div>
    </aside>
  );
};
