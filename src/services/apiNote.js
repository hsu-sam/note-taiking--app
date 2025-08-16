// import supabase from "./supabase";

// export async function getNotes() {
//   const { data, error } = await supabase
//     .from("notes")
//     .select("*")
//     .eq("archived", false);

//   if (error) {
//     console.error(error);
//     throw new Error("Notes could not be loaded");
//   }
//   return data;
// }

// // For ARCHIVING a note
// export async function archiveNote(id) {
//   const { data, error } = await supabase
//     .from("notes")
//     .update({ archived: true })
//     .eq("id", id)
//     .select()
//     .single();

//   if (error) {
//     console.error("Error archiving note:", error);
//     throw new Error("Note could not be archived");
//   }
//   return data;
// }

// // For FETCHING archived notes
// export async function getArchivedNotes() {
//   const { data, error } = await supabase
//     .from("notes")
//     .select("*")
//     .eq("archived", true);

//   if (error) {
//     console.error(error);
//     throw new Error("Archived notes could not be loaded");
//   }
//   return data;
// }

// // Restore a note(move from archived to active)
// export async function restoreNote(id) {
//   const { data, error } = await supabase
//     .from("notes")
//     .update({ archived: false })
//     .eq("id", id)
//     .select()
//     .single();

//   if (error) {
//     console.error("Error restoring note:", error);
//     throw new Error("Note could not be restored");
//   }
//   return data;
// }

// export async function createEditNote(newNote, id) {
//   if (id) {
//     // — EDIT existing note
//     const { data, error } = await supabase
//       .from("notes")
//       .update(newNote)
//       .eq("id", id)
//       .select()
//       .single();

//     if (error) {
//       console.error("Error updating note:", error);
//       throw error;
//     }
//     return data;
//   } else {
//     const { data, error } = await supabase
//       .from("notes")
//       .insert([newNote])
//       .select()
//       .single();

//     if (error) {
//       console.error("Error creating note:", error);
//       throw error;
//     }
//     return data;
//   }
// }

// export async function deleteNote(id) {
//   const { data, error } = await supabase.from("notes").delete().eq("id", id);

//   if (error) {
//     console.log(error);
//     throw new Error("Note could not be deleted");
//   }
//   return data;
// }

import supabase from "./supabase";

export async function getNotes() {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("archived", false);

  if (error) {
    console.error(error);
    throw new Error("Notes could not be loaded");
  }
  return data;
}

// For ARCHIVING a note
export async function archiveNote(id) {
  const { data, error } = await supabase
    .from("notes")
    .update({ archived: true })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error archiving note:", error);
    throw new Error("Note could not be archived");
  }
  return data;
}

// For FETCHING archived notes
export async function getArchivedNotes() {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("archived", true);

  if (error) {
    console.error(error);
    throw new Error("Archived notes could not be loaded");
  }
  return data;
}

// Restore a note (move from archived to active)
export async function restoreNote(id) {
  const { data, error } = await supabase
    .from("notes")
    .update({ archived: false })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error restoring note:", error);
    throw new Error("Note could not be restored");
  }
  return data;
}

export async function createEditNote(newNote, id) {
  if (id) {
    // — EDIT existing note
    const { data, error } = await supabase
      .from("notes")
      .update(newNote)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating note:", error);
      throw error;
    }
    return data;
  } else {
    // — CREATE new note
    // Get the current authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      throw new Error("User not authenticated");
    }

    // Add user_id to the new note
    const noteWithUserId = {
      ...newNote,
      user_id: user.id,
      archived: newNote.archived ?? false, // Set default archived status
    };

    const { data, error } = await supabase
      .from("notes")
      .insert([noteWithUserId])
      .select()
      .single();

    if (error) {
      console.error("Error creating note:", error);
      throw error;
    }
    return data;
  }
}

export async function deleteNote(id) {
  const { data, error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    console.error("Error deleting note:", error);
    throw new Error("Note could not be deleted");
  }
  return data;
}
