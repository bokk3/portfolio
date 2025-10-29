// Simple file-based database for contact entries
// In production, you'd use a real database like PostgreSQL, MongoDB, etc.

import fs from 'fs';
import path from 'path';

export interface ContactEntry {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
  locale: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  ipAddress?: string;
  userAgent?: string;
}

const DB_FILE = path.join(process.cwd(), 'data', 'contacts.json');

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.dirname(DB_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read all contacts
export function getAllContacts(): ContactEntry[] {
  try {
    ensureDataDir();
    if (!fs.existsSync(DB_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
}

// Save contact entry
export function saveContact(contact: Omit<ContactEntry, 'id' | 'timestamp' | 'status'>): ContactEntry {
  try {
    ensureDataDir();
    const contacts = getAllContacts();
    
    const newContact: ContactEntry = {
      ...contact,
      id: generateId(),
      timestamp: new Date().toISOString(),
      status: 'new'
    };
    
    contacts.push(newContact);
    fs.writeFileSync(DB_FILE, JSON.stringify(contacts, null, 2));
    
    return newContact;
  } catch (error) {
    console.error('Error saving contact:', error);
    throw new Error('Failed to save contact');
  }
}

// Update contact status
export function updateContactStatus(id: string, status: ContactEntry['status']): boolean {
  try {
    const contacts = getAllContacts();
    const contactIndex = contacts.findIndex(c => c.id === id);
    
    if (contactIndex === -1) {
      return false;
    }
    
    contacts[contactIndex].status = status;
    fs.writeFileSync(DB_FILE, JSON.stringify(contacts, null, 2));
    
    return true;
  } catch (error) {
    console.error('Error updating contact status:', error);
    return false;
  }
}

// Get contact by ID
export function getContactById(id: string): ContactEntry | null {
  const contacts = getAllContacts();
  return contacts.find(c => c.id === id) || null;
}

// Delete contact
export function deleteContact(id: string): boolean {
  try {
    const contacts = getAllContacts();
    const filteredContacts = contacts.filter(c => c.id !== id);
    
    if (filteredContacts.length === contacts.length) {
      return false; // Contact not found
    }
    
    fs.writeFileSync(DB_FILE, JSON.stringify(filteredContacts, null, 2));
    return true;
  } catch (error) {
    console.error('Error deleting contact:', error);
    return false;
  }
}

// Generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Get contacts with filters
export function getContactsFiltered(filters: {
  status?: ContactEntry['status'];
  locale?: string;
  limit?: number;
  offset?: number;
}): { contacts: ContactEntry[]; total: number } {
  let contacts = getAllContacts();
  
  // Apply filters
  if (filters.status) {
    contacts = contacts.filter(c => c.status === filters.status);
  }
  
  if (filters.locale) {
    contacts = contacts.filter(c => c.locale === filters.locale);
  }
  
  // Sort by timestamp (newest first)
  contacts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  
  const total = contacts.length;
  
  // Apply pagination
  if (filters.offset) {
    contacts = contacts.slice(filters.offset);
  }
  
  if (filters.limit) {
    contacts = contacts.slice(0, filters.limit);
  }
  
  return { contacts, total };
}