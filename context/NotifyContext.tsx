"use client";

import { InfoIcon, X } from "lucide-react";
import { createContext, useContext, useState, ReactNode } from "react";

type MessageType = {
  message: string;
  duration?: number;
  isExpired: boolean;
  createdAt: Date;
};

type NotifyContextType = {
  queue: MessageType[];
  addToQueue: (props: { message: string; duration?: number }) => void;
  updateQueue: (props: MessageType[]) => void;
  resetQueue: () => void;
};

const NotifyContext = createContext<NotifyContextType | undefined>(undefined);

export const NotifyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [queue, setQueue] = useState<MessageType[]>([]);

  const addToQueue = (props: { message: string; duration?: number }) => {
    const newMessage: MessageType = {
      ...props,
      createdAt: new Date(),
      isExpired: false,
    };

    if (queue.length == 0) {
      setQueue([newMessage]);
      return;
    }
    setQueue((prev) => {
      return [...prev, newMessage];
    });
  };

  const updateQueue = (props: MessageType[]) => {
    setQueue(props);
  };

  const expireMessage = (index: number, duration?: number) => {
    const helper = () => {
      setQueue((prevQueue) => {
        const newQueue = [...prevQueue];
        if (newQueue[index]) {
          newQueue[index] = {
            ...newQueue[index],
            isExpired: true,
          };
        }
        return newQueue;
      });
    };
    if (!duration) {
      helper();
      return;
    }
    setTimeout(() => {
      helper();
    }, duration * 1000);
  };

  const resetQueue = () => {
    setQueue([]);
  };

  return (
    <NotifyContext.Provider
      value={{ queue, addToQueue, updateQueue, resetQueue }}
    >
      <div className="absolute z-50 top-2 right-5 flex flex-col items-end gap-1 overflow-hidden">
        {queue.map((value, index) => {
          if (value.isExpired) return;

          const duration = value.duration || 5;

          expireMessage(index, duration);

          return (
            <div
              id={`message-${index}`}
              key={value.createdAt.toString()}
              className={`p-2 bg-(--background-secondary) text-sm text-(--text-primary) rounded-md border border-(--border-primary) w-100 max-w-[80vw] flex gap-2`}
            >
              <InfoIcon className="w-5" />
              <h3 className="flex-1">{value.message}</h3>
              <button
                className="cursor-pointer hover:*:text-(--accent-primary)"
                onClick={() => {
                  expireMessage(index);
                }}
              >
                <X className="w-5" />
              </button>
            </div>
          );
        })}
      </div>
      {children}
    </NotifyContext.Provider>
  );
};

export const useNotify = () => {
  const context = useContext(NotifyContext);
  if (!context) {
    throw new Error("useNotify must be used within NotifyProvider");
  }
  return context;
};
